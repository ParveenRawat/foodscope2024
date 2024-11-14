import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div className="flex flex-col">
        <Navbar />

        <div className="flex-1">
          <WrappedComponent {...props} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  };
};

export default Layout;
