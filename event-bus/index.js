const PORT = 4005;
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// const events = [];

// const postEvent = async (url, event) => {
//   try {
//     await axios.post(url, event);
//   } catch (err) {
//     console.log(`Failed to send event to ${url}: ${err.message}`);
//   }
// };

// const postEventWithRetry = async (url, event, retries = 3) => {
//   for (let attempt = 1; attempt <= retries; attempt++) {
//     try {
//       await axios.post(url, event);
//       return; // Success
//     } catch (err) {
//       console.log(`Attempt ${attempt} failed for ${url}: ${err.message}`);
//       if (attempt === retries) {
//         console.log(`Max retries reached for ${url}`);
//       } else {
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Delay before retrying
//       }
//     }
//   }
// };

const events = []; // Store all events for replay or retries
let failedEvents = []; // Store failed event deliveries

// Post events to services
const services = [
  'http://posts-clusterip-srv:4000/events', // Posts Service
  // 'http://localhost:4001/events', // Comments Service
  // 'http://localhost:4002/events',  // Query Service
  // 'http://localhost:4003/events'  // Moderation Service
];

app.post('/events', (req, res) => {
  const event = req.body;
  
  // Store the event in memory
  events.push(event);

  // axios.post('http://localhost:4000/events', event);
  // axios.post('http://localhost:4001/events', event);
  // axios.post('http://localhost:4002/events', event);
  // axios.post('http://localhost:4003/events', event);

  // postEventWithRetry('http://localhost:4000/events', event);
  // postEventWithRetry('http://localhost:4001/events', event);
  // postEventWithRetry('http://localhost:4002/events', event); // Query service
  // postEventWithRetry('http://localhost:4003/events', event); // Moderation service

  // Attempt to send the event to all services
  services.forEach((service) => {
    axios.post(service, event).catch((err) => {
      console.log(`Failed to send event to ${service}. Storing for retry.`);
      // Store failed events for retry
      failedEvents.push({ service, event });
    });
  });

  res.send({ status: 'OK'});
});

// Endpoint to return all events (to enable event replay after service restarts)
app.get('/events', (req, res) => {
  try {
    res.send(events);
  } catch (error) {
    console.log("Error", error.message);
  }
});

// Retry failed events every 5 seconds
setInterval(() => {
  failedEvents.forEach(({ service, event }, index) => {
    axios.post(service, event)
      .then(() => {
        console.log(`Successfully resent event to ${service}`);
        // Remove successfully sent event from failedEvents list
        failedEvents.splice(index, 1);
      })
      .catch(err => console.log(`Retry failed for ${service}:`, err.message));
  });
}, 5000);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 😃`);
});