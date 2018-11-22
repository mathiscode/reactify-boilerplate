const winston = require('winston')
const { Loggly } = require('winston-loggly-bulk')

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
if (process.env.ERROR_LOG_FILE && process.env.ERROR_LOG_FILE !== '') transports.push(new winston.transports.File({ filename: process.env.ERROR_LOG_FILE, format: formats.file, level: 'error' }))

// Setup Loggly transport
if (process.env.USE_LOGGLY && process.env.USE_LOGGLY === 'true') {
  console.log('Ignore the following warning, it is a known issue with winston-loggly-bulk#3.x')
  console.log('- See issue: https://github.com/loggly/winston-loggly-bulk/issues/45')

  transports.push(new Loggly({
    subdomain: process.env.LOGGLY_SUBDOMAIN,
    token: process.env.LOGGLY_TOKEN,
    tags: process.env.LOGGLY_TAGS && process.env.LOGGLY_TAGS !== '' ? process.env.LOGGLY_TAGS.split(',') : ['Reactify-Boilerplate', 'Winston-NodeJS'],
    json: true
  }))
}

// Setup config object
const config = {
  level: process.env.LOG_LEVEL || 'info',
  transports
}

const logger = winston.createLogger(config)

module.exports = logger
