var winston = require('winston');
var logger = new winston.Logger();

winston.info('log aa',{timestamp:Date.now()});
winston.error('error aa');