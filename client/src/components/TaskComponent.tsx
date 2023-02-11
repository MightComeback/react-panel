import axios from "axios";
import React, { useEffect } from "react";

const TaskComponent = ({ title }: { title: string }) => {
  const taskData = {
    title: title,
  };

  const deleteThisTaskFromDatabase = () => {
    axios
      .post("/todo_del_api", taskData)
      .then((res) => {
        if (res.status === 200) window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="rounded-xl px-8 py-4 border border-gray-200
       flex max-w-80 sm:w-80 items-center justify-between"
    >
      <div className="flex flex-wrap mr-3">
        <h3 className="text-lg text-gray-600">{title}</h3>
      </div>
      <div>
        <button
          onClick={deleteThisTaskFromDatabase}
          className="uppercase text-xs
              bg-gray-100 rounded-md p-1"
        >
          done
        </button>
      </div>
    </div>
  );
};

export default TaskComponent;
