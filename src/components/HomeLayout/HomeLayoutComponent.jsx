import React from "react";
import Header from "../header/Header";
import HomeContentComponent from "../HomeContent/HomeContentComponent";
import Footer from "../Footer/Footer";
import "./HomeLayout.css";

function HomeLayoutComponent() {
  return (
    <>
      <body className="container">
        <div className="header-body-section">
          <Header />
          <HomeContentComponent />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default HomeLayoutComponent;
