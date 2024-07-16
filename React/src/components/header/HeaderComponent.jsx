// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoComponent from "../Logo/LogoComponent";
import ButtonComponent from "../buttons/ButtonComponent";
import TriangleComponent from "../triangles/TriangleComponent";
import WelcomeComponent from "../welcomeBox/WelcomeComponent";
import "./header.css";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="flex nav">
        <LogoComponent />
        <div className="flex gab">
          <ButtonComponent />
        </div>
      </div>
      <TriangleComponent />
      <WelcomeComponent />
    </header>
  );
};

export default HeaderComponent;
