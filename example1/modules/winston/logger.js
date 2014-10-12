var fs = require('fs');
var path = require ('path');
var moment = require('moment');
var winston = require('winston');

function cumtomTimeStamp() {
  var timestamp = new moment().format("YYYY-MM-DD HH:hh:mm");
  return timestamp;
};

exports.getLogger = function() {
  var logPath = path.normalize(__dirname + '../../../logs/');
  var logger = new (winston.Logger)({
    transports: [
      new(winston.transports.DailyRotateFile)({
        level: "debug",
        filename: path.join(logPath, "mbuzzer.log"),
        datePattern: ".yyyyMMdd",
        timestamp: cumtomTimeStamp,
        handleExceptions: true
    }),
      new(winston.transports.Console)({
        level: "debug",
        colorize: true,
        timestamp: cumtomTimeStamp
      })
    ],
    exceptionHandlers: [
      new winston.transports.File({
          filename: path.join(logPath, "mbuzzer_exception.log"),
          datePattern: ".yyyyMMdd",
      })
    ]
  });
  return logger;
};