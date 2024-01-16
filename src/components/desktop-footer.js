import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiAccountTie } from "@mdi/js";
import { Link } from "gatsby";

const DesktopFooter = () => {
  return (
    <footer className="border-t border-textPrimary flex justify-center items-center mt-40 p-4">
      <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
          <div className="flex text-center gap-2">
            <Icon className="text-white" path={mdiAccountTie} size={1} />
            <p className="font-primaryFont text-white">christoffer</p>
          </div>
          <p className="text-textPrimary font-primaryFont">
            christoffer.jadermark@gmail.com
          </p>
          <p className="font-primaryFont text-white">
            Web designer and front-end developer
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-primaryFont text-2xl font-bold text-white mb-2">
            Media
          </p>
          <div className="flex gap-2">
            <Link to="https://github.com/christofferjadermark">
              <Icon className="text-white" path={mdiGithub} size={1} />
            </Link>
            <Link to="https://www.linkedin.com/in/christoffer-jadermark-88956b100/">
              <Icon className="text-white" path={mdiLinkedin} size={1} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
