const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Task = require('../server/model/Task');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const uri = process.env.DATABASE_URL;
const coin_key = process.env.COINMARKETCAP_API_KEY;

const connect = async () => {
  await mongoose.connect(uri).then(() => console.log("Connected to db")).catch((err) => console.log(err))
};

connect();

app.get("/todo_api", async (req, res) => {
  try {
    const data = await Task.find();
    res.json(data)
  } catch (error) {
    res.send({ message: "Error fetching" });
  }
})

app.get("/coin_api", async (req, res) => {
  try {
    const apiResponse = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': coin_key,
      },
    });
    console.log(apiResponse.data);
    res.json(apiResponse.data["data"]);
  } catch (error) {
    res.send({ message: "Error fetching" });
  }
})

app.post("/todo_del_api", async (req, res) => {
  const taskToDeleteTitle = req.body["title"];

  try {
    const delData = await Task.findOneAndDelete({ title : taskToDeleteTitle })
    res.send(delData)
  } catch (error) {
    res.send("Error deleting task")
  }
})

app.post("/todo_add_api", async (req, res) => {
  const taskToAddTitle = req.body["title"];

  try {
    const addData = await Task.create({ title: taskToAddTitle })
    res.send(addData)
  } catch (error) {
    res.send("Error adding task")
  }
})

app.listen(8000, function(err) {
  if (err) throw Error(err);
  console.log("Server started on port 8000")
})