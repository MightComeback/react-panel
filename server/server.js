const express = require('express')
const mongoose = require('mongoose');
const Task = require('../server/model/Task')
require('dotenv').config()

const app = express()
const uri = process.env.DATABASE_URL;

const connect = async () => {
  await mongoose.connect(uri).then(() => console.log("Connected to db")).catch((err) => console.log(err))
};

connect();

app.get("/todo_api", async (req, res) => {
  try {
    const data = await Task.find();
    res.json(data)
  } catch (err) {
    res.send({ message: "Error fetching" });
  }
})

app.listen(8000, function(err) {
  if (err) throw Error(err);
  console.log("Server started on port 8000")
})