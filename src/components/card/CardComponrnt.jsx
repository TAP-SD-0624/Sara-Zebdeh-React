import React from "react";
import PropTypes from "prop-types";
import StarsRatingComponent from "../stars/StarsRatingComponent";
import "./card.css";

function CardComponrnt(props) {
  return (
    <div className="topic">
      <div className="topic-img">
        <img src={`/${props.image}`} alt={props.topic} />
      </div>
      <div className="information-for-topic">
        <p className="topicCategory">{props.category}</p>
        <h3>{props.topic}</h3>
        <StarsRatingComponent rating={props.rating} />
        <p className="auther-p">Author: {props.name}</p>
      </div>
    </div>
  );
}

CardComponrnt.propTypes = {
  image: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default CardComponrnt;
