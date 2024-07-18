import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import DetailsContentComponent from "../DetailsContent/DetailsContentComponent";
import FooterComponent from "../footer/FooterComponent";
import "./DetailsLayout.css";

function DetailsLayoutComponent() {
  return (
    <>
      <body className="container">
        <div className="header-body-section">
          <HeaderComponent />
          <DetailsContentComponent />
        </div>
        <FooterComponent />
      </body>
    </>
  );
}

export default DetailsLayoutComponent;
