import React, { useEffect, useState } from "react";
import TaskComponent from "../../components/TaskComponent";
import Task from "../../model/Task";

const Todo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/todo").then(async (res) => {
      try {
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log("Error");
        console.log(err);
      }
    });
  }, []);
  return (
    <>
      <div className="flex py-12 flex-col">
        <div className="mb-16 w-full flex justify-center">
          <h1 className="text-xl uppercase">Your tasks:</h1>
        </div>
        <section className="space-y-6 ml-24">
          {/* {tasks.map((task, idx) => (
            <div key={idx}>
              <TaskComponent title={task.title} />
            </div>
          ))} */}
          <p>{data}</p>
        </section>
      </div>
    </>
  );
};

export default Todo;
