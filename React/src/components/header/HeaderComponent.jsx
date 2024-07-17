import React from "react";
import LogoComponent from "../Logo/LogoComponent";
import ButtonComponent from "../buttons/ButtonComponent";
import TriangleComponent from "../triangles/TriangleComponent";
import WelcomeComponent from "../welcomeBox/WelcomeComponent";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";
import "./header.css";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="flex nav">
        <LogoComponent />
        <div className="flex gab">
          <ButtonComponent name="Dark Mode" icon={AiOutlineHeart} />
          <ButtonComponent name="Favourites" icon={AiOutlineMoon} />
        </div>
      </div>
      <TriangleComponent />
      <WelcomeComponent />
    </header>
  );
};

export default HeaderComponent;
