import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import "./layout.scss";

const Layout = (props) => {
  return (
    <>
      <body className="light-mode container">
        <div className="header-body-section">
          <Header />
          {props.children}
        </div>
        <Footer />
      </body>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
