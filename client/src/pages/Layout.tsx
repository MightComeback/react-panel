import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentNavPage, setIsNavOpen } from "../redux/slices/navSlice";

const Layout = () => {
  const navManagement = useAppSelector(
    (state) => state.navStateManagement.currentNavPage
  );

  const navDispatch = useAppDispatch();

  return (
    <>
      <nav
        className="flex flex-col float-left h-screen w-24
         shadow-lg items-center p-2"
      >
        <ul className="[&_li]:border-b [&_li]:my-4 [&_li]:active:bg-red-100">
          <li>
            <Link
              onClick={() => {
                navDispatch(setCurrentNavPage("home"));
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => navDispatch(setCurrentNavPage("todo"))}
              to="/todo"
            >
              To-do
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
