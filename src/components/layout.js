import React from "react";
import Github from "../assets/github.svg";
import { Link } from "gatsby";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiAccountTie } from "@mdi/js";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="h-10 flex justify-between bg-bgColor">
        <div className="flex gap-5 justify-start mt-10">
          <div className="items-center flex font-primaryFont text-textPrimary pl-5">
            <Github className="hover:animate-pulse cursor-pointer" />
          </div>
          <div className="items-center flex font-primaryFont text-textPrimary">
            christoffer jadermark
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <ul className="text-textPrimary flex gap-5 justify-end pr-5 h-full">
            <li className="font-primaryFont items-center flex test">
              <Link to="/">home</Link>
            </li>
            <li className="font-primaryFont items-center flex test">works</li>
            <li className="font-primaryFont items-center flex test">
              <Link to="/about">about-me</Link>
            </li>
            <li className="font-primaryFont items-center flex test">
              <Link to="/contact">contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="global-container flex flex-col flex-1">{children}</main>
      <footer className="h-52 max-h-52 border-t border-textPrimary flex justify-center items-center mt-40">
        <div className="h-36 w-2/3 flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex text-center gap-2">
              <Icon className="text-white" path={mdiAccountTie} size={1} />
              <p className="font-primaryFont text-white">christoffer</p>
              <p className="text-textPrimary font-primaryFont">
                christoffer.jadermark@gmail.com
              </p>
            </div>
            <p className="font-primaryFont text-white">
              Web designer and front-end developer
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-primaryFont text-2xl font-bold text-white">
              Media
            </p>
            <div className="flex gap-2">
              <Icon className="text-white" path={mdiGithub} size={1} />
              <Icon className="text-white" path={mdiLinkedin} size={1} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
