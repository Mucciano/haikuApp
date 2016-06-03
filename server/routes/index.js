var express = require('express'),
    router = express.Router(),


    path = require('path');

router.get('/', function(req, res, next) {
  res.sendFile( path.resolve('public/client/views/index.html') );
});

module.exports = router;
