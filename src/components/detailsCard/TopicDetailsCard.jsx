import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./detailsCard.css";

const TopicDetailsCard = () => {
  return (
    <div className="relative-container">
      <div className="topic-of-card">
        <div className="topic-card-img">
          <img src="./assets/javascript.jpg" alt="JavaScript" />
        </div>
        <div className="favourite-information-div">
          <div className="p-h5-a-div gap">
            <h5>JavaScript</h5>by <a href="#">Emily Chen</a>
          </div>
          <div className="favourite-div">
            <p>Interested about this topic?</p>
            <div className="add-to-favourite-div">
              <button className="gap btn" id="add-to-favourite-btn">
                <span className="add-span">Add to Favourites</span>
                <AiOutlineHeart className="icon-btn" />

              </button>
            </div>
            <p className="add-to-favourite-bottom">Unlimited Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetailsCard;
