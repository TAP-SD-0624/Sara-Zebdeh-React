import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./subTopics.css";

const SubTopicsComponent = () => {
  return (
    <div className="sub-topics-div">
      <div className="sub-topic">
        <h4 className="sub-topics-h4">JavaScript Sub Topics</h4>
      </div>
      <div className="sub-topic">
        <button className="flex gap btn">
          <AiOutlineCheckCircle className="check-icon" />

          <span>JavaScript data types and variables</span>
        </button>
      </div>
      <div className="sub-topic">
        <button className="flex gab btn">
          <AiOutlineCheckCircle className="check-icon" />
          <span>JavaScript functions and control flow</span>
        </button>
      </div>
      <div className="sub-topic">
        <button className="flex gab btn">
          <AiOutlineCheckCircle className="check-icon" />
          <span>JavaScript objects and classes</span>
        </button>
      </div>
      <div className="sub-topic">
        <button className="flex gab btn">
          <AiOutlineCheckCircle className="check-icon" />
          <span>JavaScript DOM manipulation and events</span>
        </button>
      </div>
      <div className="sub-topic">
        <button className="flex gab btn">
          <AiOutlineCheckCircle className="check-icon" />
          <span>JavaScript asynchronous programming and callbacks</span>
        </button>
      </div>
      <div className="sub-topic">
        <button className="flex gab btn">
          <AiOutlineCheckCircle className="check-icon" />
          <span>JavaScript frameworks and libraries (React, Angular, Vue)</span>
        </button>
      </div>
    </div>
  );
};

export default SubTopicsComponent;
