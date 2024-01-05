import React from "react";
import DesktopHeader from "./desktop-header.js";
import DesktopFooter from "./desktop-footer.js";
import MobileHeader from "./mobile-header.js";

const Layout = ({ children }) => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <main className="global-container flex flex-col flex-1">{children}</main>
      <DesktopFooter />
    </>
  );
};

export default Layout;
