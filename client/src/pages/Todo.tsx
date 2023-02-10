import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskComponent from "../components/TaskComponent";
import Task from "../../../server/model/Task";

type Task = {
  title: string;
};

const Todo = () => {
  const [taskData, setTaskData] = useState([{}]);
  let tasks: string[];

  const getTaskDataFromServer = () => {
    axios
      .get("/todo_api")
      .then((res) => setTaskData(res.data))
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
    </div>
  );
};

export default Todo;
