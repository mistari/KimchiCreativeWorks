var logger = require('../modules/winston/logger.js').getLogger();

var express = require('express');
var router = express.Router();

router.route('/clan1')
.all(function(req, res, next) {
  logger.debug("[routes][kimchi] REST API[clan1] api called");
  next();
})
.get(function(req, res, next) {
  logger.debug("[routes][kimchi] REST API[clan1] Get Method api called");
  res.send('Hello kimchi!');
})
.post(function(req, res, next) {
  logger.debug("[routes][kimchi] REST API[clan1] Post Method api called");
  res.send('Hello kimchi!');
});

router.route('/clan2')
.all(function(req, res, next) {
  logger.debug("[routes][kimchi] REST API[clan2] api called");
  next();
})
.get(function(req, res, next) {
  logger.debug("[routes][kimchi] REST API[clan2] Get Method api called");
  res.send('Hello kimchi!');
})
.post(function(req, res, next) {
  logger.debug("[routes][kimchi] REST API[clan2] Post Method api called");
  res.send('Hello kimchi!');
});

module.exports = router;
