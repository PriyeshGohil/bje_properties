const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./models/user');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/bje')

app.get('/status', (req, res) => {
  res.send({msg: 'hello world'})
})

// TODO server side validation
app.post('/signin', (req, res) => {
  
  if(!req.body.username || !req.body.password) {
    return res.status(500);
  }

  User.findOne({name: req.body.username}, function(err, userObject) {
    if(err) {
      res.status(500);
      return console.log('err');
    }

    if(userObject === null) {
      res.status(401).json({error: 'user not found'});
      return console.log('user not found: ', userObject);
    }

    bcrypt.compare(req.body.password, userObject.password, function(bcryptErr, bcryptRes) {
      if(bcryptErr || !bcryptRes) {
        res.status(500).json();
        return console.log('bcrypt error: ', bcryptErr);
      }

      res.status(200).json({msg: 'user logged In!'});
      console.log('bcryptRes: ', bcryptRes);
    })
  })
});

// TODO move server creation code to different file.
app.listen(process.env.PORT || 8081)
