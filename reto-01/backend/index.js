import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import User from './models/User.js'
import cors from 'cors'

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://Brayan:0409@cluster0.5jnnsmu.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const whiteList = ["http://127.0.0.1:5173"]
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('error en cors'))
        }
    }
}
app.use(cors(corsOptions))
app.post('/users/api', async (req, res) => {
  const data = req.body
  const user = await new User(data)
  const userSave = await user.save()
  res.json(userSave)
})
const PORT = 5000
app.listen(PORT, () => {
  console.log(PORT)
})
