import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Triangles from "../Triangles/Triangles";
import WelcomeBox from "../WelcomeBox/WelcomeBox";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="flex header-section">
        <Logo />
        <div className="flex gab">
          <Button name="Dark Mode" icon={AiOutlineHeart} />
          <Button name="Favourites" icon={AiOutlineMoon} />
        </div>
      </div>
      <Triangles />
      <WelcomeBox />
    </header>
  );
};

export default Header;
