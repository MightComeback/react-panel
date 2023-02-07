import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

const Task = model("Task", taskSchema);
export default Task;