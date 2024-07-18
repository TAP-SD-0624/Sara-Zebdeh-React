import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./topic'sDetails.css";

const TopicDetailsInformation = () => {
  return (
    <div className="details-div">
      <div>
        <h4>Web Development Languages</h4>
        <h3 className="details-h3">JavaScript</h3>
        <ul className="details-ul">
          <li>
            <AiFillStar className="star" />
          </li>
          <li>
            <AiFillStar className="star" />
          </li>
          <li>
            <AiFillStar className="star" />
          </li>
          <li>
            <AiFillStar className="star" />
          </li>
          <li>
            <AiFillStar className="star" />
          </li>
        </ul>
      </div>
      <p className="details-p">
        JavaScript is a high-level programming language that is used to create
        interactive web pages and dynamic user interfaces. It allows for the
        creation of complex, responsive web applications that can run both on
        the client side (in the web browser) and the server side (using
        Node.js). JavaScript is one of the most widely-used programming
        languages in web development.
      </p>
    </div>
  );
};

export default TopicDetailsInformation;
