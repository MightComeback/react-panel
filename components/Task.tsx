import React from "react";

const Task = ({ title }: { title: string }) => {
  return (
    <div
      className="rounded-xl px-8 py-4 border border-gray-200
       flex w-80 items-center justify-between"
    >
      <div className="flex flex-wrap mr-3">
        <h3 className="text-lg">{title}</h3>
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
  );
};

export default Task;
