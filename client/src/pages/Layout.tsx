import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [navActive, setNavActive] = useState(0);

  return (
    <>
      <nav
        className="flex flex-col float-left h-screen w-24
         shadow-lg items-center p-2"
      >
        <ul className="[&_li]:border-b [&_li]:my-4 [&_li]:active:bg-red-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">To-do</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
