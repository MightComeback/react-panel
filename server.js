import express from 'express';
import mongoose from 'mongoose';
import Task from './model/Task.js';

const app = express();
const uri = ('mongodb+srv://admin:eUlbLv7WtYMqtIOY@main.9zs6n9a.mongodb.net/?retryWrites=true&w=majority');

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("Connected")
  } catch (error) {
    console.error(error);
  }
}

connect();

app.get('/todo', async (req, res) => {
  try {
    if (req) {
      let tasks = await Task.find({}).exec();
      res.json(tasks)
    } else {
      res.json({ error: "Error" })
    }
  } catch (error) {
    throw error;
  }
})

app.listen(5137, () => {
  console.log("Server started on port 5137")
})
 

