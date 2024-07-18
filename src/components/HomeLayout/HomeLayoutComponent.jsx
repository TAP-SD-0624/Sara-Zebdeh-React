import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import ContentComponent from "../content/ContentComponent";
import FooterComponent from "../footer/FooterComponent";
import "./HomeLayout.css";

function HomeLayoutComponent() {
  return (
    <>
      <body className="container">
        <div className="header-body-section">
          <HeaderComponent />
          <ContentComponent />
        </div>
        <FooterComponent />
      </body>
    </>
  );
}

export default HomeLayoutComponent;
