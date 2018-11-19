const winston = require('winston')

// Setup formats
const formats = {
  console: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.simple()
  ),

  file: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  )
}

// Setup transports
let transports = []
if (process.env.NODE_ENV !== 'production') transports.push(new winston.transports.Console({ format: formats.console }))
if (process.env.LOG_FILE && process.env.LOG_FILE !== '') transports.push(new winston.transports.File({ filename: process.env.LOG_FILE, format: formats.file }))

// Setup config object
const config = {
  level: process.env.LOG_LEVEL || 'info',
  transports
}

module.exports = winston.createLogger(config)
