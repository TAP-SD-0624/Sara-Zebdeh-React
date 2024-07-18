import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import HomeContentComponent from "../HomeContent/HomeContentComponent";
import FooterComponent from "../footer/FooterComponent";
import "./HomeLayout.css";

function HomeLayoutComponent() {
  return (
    <>
      <body className="container">
        <div className="header-body-section">
          <HeaderComponent />
          <HomeContentComponent />
        </div>
        <FooterComponent />
      </body>
    </>
  );
}

export default HomeLayoutComponent;
