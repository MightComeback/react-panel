import React, { useEffect, useState } from "react";
import TaskComponent from "../../components/TaskComponent";
import Task from "../../model/Task";

const Todo = () => {
  const [taskData, setTaskData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setTaskData(data));
  }, []);

  return (
    <div className="flex py-12 flex-col">
      <div className="mb-16 w-full flex justify-center">
        <h1 className="text-xl uppercase">Your tasks:</h1>
      </div>
      <section className="space-y-6 ml-24">
        <p></p>
      </section>
    </div>
  );
};

export default Todo;
