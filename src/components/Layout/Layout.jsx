import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";

const Layout = (props) => {
  return (
    <>
      <body className="container">
        <div className="header-body-section">
          <Header />
          {props.content}
        </div>
        <Footer />
      </body>
    </>
  );
};

Layout.propTypes = {
    content: PropTypes.node.isRequired,
};

export default Layout;
