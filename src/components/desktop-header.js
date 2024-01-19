import React from "react";
import Github from "../assets/github.svg";
import { Link, useStaticQuery, graphql } from "gatsby";

const DesktopHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuLinks {
        nodes {
          linkName
          linkAdress
        }
      }
    }
  `);
  const menuLinks = data.allContentfulMenuLinks.nodes;

  return (
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
          {menuLinks.map((link) => (
            <li
              className="font-primaryFont items-center flex test"
              key={link.linkAdress}
            >
              <Link to={link.linkAdress}>{link.linkName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopHeader;
