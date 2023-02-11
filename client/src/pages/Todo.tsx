import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskComponent from "../components/TaskComponent";
import Task from "../../../server/model/Task";

const Todo = () => {
  const [taskData, setTaskData] = useState([{}]);
  const [inputTaskData, setInputTaskData] = useState("");

  const getTaskDataFromServer = () => {
    axios
      .get("/todo_api")
      .then((res) => setTaskData(res.data))
      .catch((err) => console.log(err));
  };

  const addNewTaskToDatabase = () => {
    axios
      .post("/todo_add_api", { title: inputTaskData })
      .then((res) => {
        console.log(res);
        setInputTaskData("");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTaskDataFromServer();
  }, []);

  return (
    <div className="flex py-12 flex-col">
      <div className="mb-16 w-full flex justify-center border-b pb-4">
        <h1 className="text-xl uppercase text-gray-600">Your tasks: </h1>
      </div>
      <section className="space-y-6 mx-24 max-w-6xl flex flex-col md:flex-row justify-between">
        <div>
          {taskData.map((task, idx) => (
            <div className="my-4" key={idx}>
              <TaskComponent title={task["title"]} />
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <p className="text-gray-500 text-lg">Add a task</p>
          <div className="flex items-center justify-center">
            <form className="space-x-4" onSubmit={addNewTaskToDatabase}>
              <input
                className="border border-gray-300 rounded-xl w-44 h-6 p-2"
                type="text"
                value={inputTaskData}
                onChange={(e) => setInputTaskData(e.target.value)}
              />
              <button
                className="text-md text-gray-400 font-light"
                type="submit"
                disabled={!inputTaskData}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todo;
