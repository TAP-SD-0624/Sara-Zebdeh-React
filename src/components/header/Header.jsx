import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Triangles from "../Triangles/Triangles";
import WelcomeBox from "../WelcomeBox/WelcomeBox";
import {
  AiOutlineHeart,
  AiOutlineMoon,
  AiFillMoon,
  AiFillHeart,
} from "react-icons/ai";
import "./header.scss";

const Header = () => {
  const [theme, setTheme] = useState("");
  const [favouriteState, setFavouriteState] = useState(false);

  useEffect(() => {
    let theme;
    let ftopics;
    theme = localStorage.getItem("theme");
    ftopics = localStorage.getItem("favourites");
    document
      .querySelector(".container")
      .classList.toggle("light-mode", theme === "light");
    document
      .querySelector(".container")
      .classList.toggle("dark-mode", theme === "dark");
    setTheme(theme);
  }, []);

  const changeTheme = () => {
    let theme = localStorage.getItem("theme") === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document
      .querySelector(".container")
      .classList.toggle("light-mode", theme === "light");
    document
      .querySelector(".container")
      .classList.toggle("dark-mode", theme === "dark");
    setTheme(theme);
  };

  const favourites = () => {
    document.querySelector(".favourites").classList.toggle("show");
    setFavouriteState(!favouriteState);
  };

  return (
    <header className="header">
      <div className="flex header-section">
        <Logo />
        <div className="flex gab">
          <Button
            name={theme === "light" ? "Dark Mode" : "Light Mode"}
            icon={theme === "light" ? AiOutlineMoon : AiFillMoon}
            onClick={changeTheme}
          />
          <Button
            name="Favourites"
            icon={favouriteState ? AiFillHeart : AiOutlineHeart}
            onClick={favourites}
          />
        </div>
      </div>
      <Triangles />
      <WelcomeBox />
    </header>
  );
};

export default Header;
