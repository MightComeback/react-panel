import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

const Task = model("Task", taskSchema);

// async function getTaskData() {
//   const taskData = Task.find({});
//   return taskData;
// }

// const taskArray = await getTaskData();
// const tasks = [];
// taskArray.map(task => tasks.push(task))

// console.log(tasks)
// export { tasks };


export default Task;
