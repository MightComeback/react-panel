import Task from './model/Task.js';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const uri = process.env.DATABASE_URL;

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("Connected")
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000")
})
 

