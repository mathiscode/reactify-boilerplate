require('dotenv').config()
const fs = require('fs')
const restify = require('restify')
const helmet = require('helmet')
const mongoose = require('mongoose')
const rjwt = require('restify-jwt-community')
const i18n = require('i18n')

const log = require('./config/log')

const indexHTML = fs.readFileSync('./public/index.html').toString()

// Setup localization
i18n.configure({
  locales: ['en', 'de'],
  directory: `${__dirname}/locales`,
  queryParameter: 'lng'
})

// Setup server
const server = restify.createServer({
  name: 'Unknown',
  ignoreTrailingSlash: true
})

server.use(helmet())
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())
server.use(i18n.init)

// Protect routes
server
  .use(
    rjwt({ secret: process.env.JWT_SECRET })
      .unless({
        path: [
          /^\/(?!api)/,
          '/api/users/login',
          '/api/users/signup'
        ]
      })
  )

// Setup routes
require('./routes/users')(server)

// Serve our React app
server.get('/*', restify.plugins.serveStatic({
  directory: './public',
  default: 'index.html'
}))

// Hacky solution to fix client-side routing
server.on('restifyError', (req, res, err, cb) => {
  if (err.jse_cause && err.jse_cause.code === 'ENOENT') {
    res.sendRaw(indexHTML)
  } else {
    return cb()
  }
})

// Restify can't remove x-powered-by-header? Workaround:
server.use((req, res, next) => {
  res.once('header', () => {
    res.setHeader('X-Powered-By', null)
  })

  next()
})

// Connect database
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true }
)

const db = mongoose.connection
db.on('error', err => {
  log.error('Failed to connect to database', err)
  process.exit(1)
})

db.once('open', () => {
  // Start server
  const port = process.env.PORT || 3001
  log.info(`Server listening on port ${port}`)
  server.listen(port)
})

module.exports = server
