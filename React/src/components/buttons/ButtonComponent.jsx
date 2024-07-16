// eslint-disable-next-line no-unused-vars
import React from "react";
import "./button.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";

const ButtonComponent = () => {
  return (
    <>
      <button className="mode-btn gab" id="colorThemeBtn">
        <AiOutlineHeart id="mode-icon-btn"></AiOutlineHeart>
        <span id="mode_btn_text" className="btn">
          Dark Mode
        </span>
      </button>
      <button className="favourites-btn gab" id="favourites-click-btn">
        <AiOutlineMoon id="heart-icon-btn"></AiOutlineMoon>
        <span className="btn">Favourites</span>
      </button>
    </>
  );
};

export default ButtonComponent;
