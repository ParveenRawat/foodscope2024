import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div className="">
        <Navbar />

        <div className="">
          <WrappedComponent {...props} />
        </div>

        <div className="bottom-0">
          <Footer />
        </div>
      </div>
    );
  };
};

export default Layout;
