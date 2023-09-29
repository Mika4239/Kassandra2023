const winston = require("winston");
require("dotenv").config();

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "debug",
  format: winston.format.combine(
    winston.format.timestamp(), 
    winston.format.json()
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
