const express = require('express')
const mongoose = require('mongoose');

const app = express()

const connect = () => {
  mongoose.connect("")
}

app.get("/todo_api", (req, res) => {
  res.json("tasks")
})

app.listen(8000, function(err) {
  if (err) throw Error(err);
  console.log("Server started on port 8000")
})