var express = require('express');

var router = express.Router();

// Add logging to debug
router.get('/hello', function (req, res) {
    console.log('Hello route hit');
    res.status(200).json('hello world');
});

// Add a basic root route
router.get('/', function(req, res) {
    res.json({ message: 'API is working' });
});

module.exports = router;