import React, { useState } from "react";
import { Link } from "gatsby";

const MobileHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="navbar bg-navColor">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            onClick={toggleNav}
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-navColor rounded-box w-52"
          >
            <li className="font-primaryFont">
              <Link to="/" onClick={closeNav} className="test">
                home
              </Link>
            </li>
            <li className="font-primaryFont">
              <Link to="/works" onClick={closeNav} className="test">
                works
              </Link>
            </li>
            <li className="font-primaryFont">
              <Link to="/about" onClick={closeNav} className="test">
                about-me
              </Link>
            </li>
            <li className="font-primaryFont">
              <Link to="/contact" onClick={closeNav} className="test">
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-base font-primaryFont">
          christoffer jadermark
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default MobileHeader;
