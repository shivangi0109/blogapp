const PORT = 4002;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {

});

app.post('/events', (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 😃`);
});