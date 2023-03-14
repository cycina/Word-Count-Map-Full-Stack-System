
const express = require('express');
const router = express.Router();
const {getWordCountMap} = require('../controllers/post.controller')

router.route('/api/posts').get(async (req, res) => {
    let wordCountMaps = await getWordCountMap()
    res.json(wordCountMaps);
  })


module.exports = router;