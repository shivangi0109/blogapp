const PORT = 4003;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 😃`);
});