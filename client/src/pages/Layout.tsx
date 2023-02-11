import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TbMenu } from "react-icons/tb";
import { setIsNavOpen } from "../redux/slices/navSlice";

const Layout = () => {
  const navPageOpen = useAppSelector(
    (state) => state.navStateManagement.currentNavPage
  );

  const navOpen = useAppSelector((state) => state.navStateManagement.isNavOpen);

  const navDispatch = useAppDispatch();

  return (
    <>
      <div
        onClick={() => navDispatch(setIsNavOpen(!navOpen))}
        className="m-4 cursor-pointer w-fit"
      >
        <TbMenu size={20} />
      </div>
      <nav
        className={`flex flex-col float-left h-screen w-36
         shadow-lg items-center fixed p-2 transition-all
         bg-white duration-500 ${navOpen ? "flex" : "-translate-x-96"}`}
      >
        <ul className="[&_li]:border-b [&_li]:my-4 [&_li]:p-1">
          <li className={navPageOpen === "home" ? "bg-red-50" : "bg-white"}>
            <Link to="/">Home</Link>
          </li>
          <li className={navPageOpen === "todo" ? "bg-red-50" : "bg-white"}>
            <Link to="/todo">To-do</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
