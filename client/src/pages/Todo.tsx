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
      <div className="mb-16 w-full flex justify-center">
        <h1 className="text-xl uppercase">Your tasks:</h1>
      </div>
      <section className="space-y-6 ml-24">
        <div>
          {taskData.map((task, idx) => (
            <div className="my-4" key={idx}>
              <TaskComponent title={task["title"]} />
            </div>
          ))}
        </div>
      </section>
      <div className="flex items-center justify-center">
        <form className="space-x-4" onSubmit={addNewTaskToDatabase}>
          <input
            className="border border-gray-300 rounded-xl w-36 h-full"
            type="text"
            value={inputTaskData}
            onChange={(e) => setInputTaskData(e.target.value)}
          />
          <button type="submit" disabled={!inputTaskData}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
