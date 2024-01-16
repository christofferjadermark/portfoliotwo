import React from "react";
import DesktopHeader from "./desktop-header.js";
import DesktopFooter from "./desktop-footer.js";
import MobileHeader from "./mobile-header.js";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
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
