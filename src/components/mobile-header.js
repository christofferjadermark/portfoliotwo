import React, { useState } from "react";
import { Link } from "gatsby";

const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar bg-bgColor">
      <div className="navbar-start relative">
        <div className="flex p-8">
          <div className="flex-1">
            <a className="btn btn-ghost font-primaryFont items-center text-textPrimary">
              christoffer jadermark
            </a>
          </div>
          <div>
            <button
              tabIndex={0}
              className="btn cursor-pointer btn-square btn-ghost"
              onClick={toggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-7 h-7 stroke-textSecondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`absolute top-full right-0 mt-2 text-textPrimary dropdown-content menu p-5 shadow bg-bgColor rounded-box w-52 ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          <li className="font-primaryFont items-center test flex">
            <Link to="/">home</Link>
          </li>
          <li className="font-primaryFont items-center test flex"><Link to="/works">works</Link></li>
          <li className="font-primaryFont items-center test flex">
            <Link to="/about">about-me</Link>
          </li>
          <li className="font-primaryFont items-center test flex">
            <Link to="/contact">contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
