const PORT = 4000;
const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  res.status(201).send(posts[id]);
});

app.get('/', (req, res) => {
  res.send('Welcome to the posts back end! 😃');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} 😃`);
})