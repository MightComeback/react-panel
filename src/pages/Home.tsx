import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex items-center justify-center py-16">
        <div
          className="rounded-lg max-w-[20rem] p-6 flex
           flex-col items-center justify-center
           shadow-lg"
        >
          <h1 className="mb-2">To-Do List</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur dolores distinctio asperiores iure, corporis minima
            recusandae.
          </p>
          <div
            className="rounded-xl border border-gray-200
                px-4 py-2"
          >
            <Link to="/todo">GO!</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;