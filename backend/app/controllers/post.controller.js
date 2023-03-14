const axios = require("axios");
const WebSocket = require('ws');

// Create a mock WebSocket server and client
const wss = new WebSocket.Server({ port: 8080 });

function removeTags(str) {
  if ((str === null) || (str === ''))
    return false;
  else
    str = str.toString();
  // Replacing the identified
  // HTML tag, numbers and punctuations with a null string.
  return str.replace(/(<([^>]+)>|\t\n|\n|\t|[.:;?!~,`"&|(){}\[\]\r/\\]|[0-9])/ig, '');
}

//processes the blog posts into a simple Word Count Map
function getWordCount(articles) {
  let map = {};
  let words;
  articles.map(blog => {
    if (blog.content.rendered) {
      words = removeTags(blog.content.rendered);
      words = words.split(/\W+/)//split words by non-word characters
        .forEach(word => {
          map[word] = (map[word] || 0) + 1;
        });
    }
  })
  return map;
}

// retrieve blog posts from the API 
async function fetchApiData() {
  const apiResponse = await axios.get(
    `https://www.thekey.academy/wp-json/wp/v2/posts`
  );
  return apiResponse.data;
}

// Return the word count map
// send Words Count Map via WebSockets
exports.getWordCountMap = async () => {
  let articles;
  let wordCountMap;
  try {
    articles = await fetchApiData();
    wordCountMap = getWordCount(articles)
    
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(wordCountMap));
      }
    }); //Sending Words Count Map via WebSockets to the frontend.
    return wordCountMap
  } catch (error) {
    console.error(error);
    return null;
  }
}


