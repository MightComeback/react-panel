import React from "react";
import Task from "../../components/Task";

const Todo = () => {
  const tasks = [];
  
  return (
    <div className="flex py-12 flex-col">
      <div className="mb-16 w-full flex justify-center">
        <h1 className="text-xl uppercase">Your tasks:</h1>
      </div>
      <section className="space-y-6 ml-24">
        <Task
          title="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sit minima ab laboriosam possimus commodi vel. Repellendus in tempore nulla!"
        />
        <Task title="task2" />
        <div
          className="rounded-xl px-8 py-4 border border-gray-200
       flex w-80 items-center justify-between"
        >
          <div className="flex flex-wrap mr-3">
            <h3 className="text-lg">example</h3>
          </div>
          <div>
            <button
              className="uppercase text-xs
              bg-gray-100 rounded-md p-1"
            >
              done
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todo;
