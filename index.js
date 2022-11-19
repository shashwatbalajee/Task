const express = require('express')
const app = express()
const port = 8081
const cors = require('cors')
const mongoose = require('mongoose')
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/loginSignUpDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("DB connected")
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)
app.post('/register', (req, res) => {
  const { name, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: 'already registered' })
    } else {
      const user = newUser({
        name,
        email,
        password
      })
      user.save(err => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'status successful' })
        }
      })
    }
  })

})

app.post('/Login',(req,res)=>{
  const {email,password} = req.body
  User.findOne({email:email},(err,user)=>{
    if(user){
      if(password === user.password){
        res.send({message:'login successful',user:user})
      }else{
        res.send({message:'password did not match'})
      }
    } else{
       res.send('user not registered')
    }
  })
})

app.listen(8081, () => {
  console.log('server started at given port')
})