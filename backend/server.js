const express = require('express');
const cors = require('cors');
const { getWordCountMap } = require('./app/controllers/post.controller');

const app = express();
const port = process.env.PORT || 4000;
const http = require('http').Server(app);

app.use(cors());

//routes
app.use('/', require('./app/routes/post.routes'))

setInterval(getWordCountMap, 5000);


http.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

module.exports = app;
