import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskComponent from "../../components/TaskComponent";
import Task from "../../model/Task";

const Todo = () => {
  const [taskData, setTaskData] = useState();

  const getTaskDataFromServer = () => {
    axios
      .get("/todo_api")
      .then((res) => setTaskData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex py-12 flex-col">
      <div className="mb-16 w-full flex justify-center">
        <h1 className="text-xl uppercase">Your tasks:</h1>
      </div>
      <section className="space-y-6 ml-24">
        <button onClick={getTaskDataFromServer}>GetData</button>
        <p>data: {taskData}</p>
      </section>
    </div>
  );
};

export default Todo;
