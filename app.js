const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const entryRouter = require('./controlers/entrys')
const totalsRouter = require('./controlers/totals')
const savingsRouter = require('./controlers/savings')

mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then( () => console.log('Connected to database'))
  .catch( error => console.log('Unable to connect to database: ', error.message))

app.use(cors())
app.use(express.json())
app.use(express.static("build"))
app.use('/api/entrys', entryRouter)
app.use('/api/totals', totalsRouter)
app.use('/api/savings', savingsRouter)

module.exports = app