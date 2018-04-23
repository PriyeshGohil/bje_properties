const mongoose = require('mongoose')
const User = require('../src/models/user')
const bcrypt = require('bcrypt')

// connecting to mongodb
mongoose.connect('mongodb://localhost:27017/bje').then(
  () => { console.log('connected to db')},
  err => {console.log('db connection error: ', err)}
)

// only creates a users if it's username doesn't already exists 
function createUser(username, pwd) {
  User.findOne({name: username}, function(err,userObject) {
    
    if(err) {
      return console.log('err:', err);
    }

    if(userObject) {
      return console.log(`user already exists`);
    }
  
    // creates new user model
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: username,
      password: pwd
    });
  
    // saves user to the database
    user.save(function(err) {
      if(err) return console.log('mongodb user save error: ', err);
      console.log('new user created');
    });
  });
}

// create new hash for password
bcrypt.hash(process.env.SUPER_USER_PWD, 10, (err, hash) => {
  if(err) {
    return console.log('bcrypt hash error: ', err);
  }
  createUser('priyesh', hash);
});
