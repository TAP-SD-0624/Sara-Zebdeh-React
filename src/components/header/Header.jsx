import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Triangles from "../Triangles/Triangles";
import WelcomeBox from "../WelcomeBox/WelcomeBox";
import { AiOutlineHeart, AiOutlineMoon, AiFillMoon } from "react-icons/ai";
import "./header.scss";

const Header = () => {
  const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //     body.classList.add("dark-mode");
  //     body.classList.remove("light-mode");
  //   } else {
  //     setTheme("light");
  //     body.classList.add("light-mode");
  //     body.classList.remove("dark-mode");
  //   }
  // };

  useEffect(() => {
    const body = document.querySelector(".container");
    if (body) {
      body.classList.toggle("light-mode", theme === "light");
      body.classList.toggle("dark-mode", theme === "dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
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
            // onClick={toggleTheme}
          />
          <Button name="Favourites" icon={AiOutlineHeart} />
        </div>
      </div>
      <Triangles />
      <WelcomeBox />
    </header>
  );
};

export default Header;
