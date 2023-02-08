import React, { useEffect } from "react";
import TaskComponent from "../../components/TaskComponent";
import Task from "../../model/Task";

const Todo = () => {
  async function run() {
    try {
      const task = await Task.findOne({ title: "default" }).exec();
      console.log(task);
    } catch (err) {
      console.log(err);
    }
  }

  run();

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
        </section>
      </div>
    </>
  );
};

export default Todo;
