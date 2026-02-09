var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/post', (req, res) => {
  res.send('POST request to the homepage')
})

module.exports = router;
