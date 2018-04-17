const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/')

app.get('/status', (req, res) => {
  res.send({msg: 'hello world'})
})

app.post('/admin', (req, res) => {
  console.log(req.body)
  res.send({msg: 'log in info sent'})
})

app.listen(process.env.PORT || 8081)
