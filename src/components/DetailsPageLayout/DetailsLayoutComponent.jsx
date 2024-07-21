import React from "react";
import Header from "../header/Header";
import DetailsContentComponent from "../DetailsContent/DetailsContentComponent";
import Footer from "../Footer/Footer";
import "./DetailsLayout.css";

function DetailsLayoutComponent() {
  return (
    <>
      <body className="container">
        <div className="header-body-section">
          <Header />
          <DetailsContentComponent />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default DetailsLayoutComponent;
