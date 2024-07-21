import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer>
        <div className="footer-div gab">
          <p>Developed with</p>
          <AiFillHeart className="heart-icon" name="heart"></AiFillHeart>
          <p>&copy; 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
