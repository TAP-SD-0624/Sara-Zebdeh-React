import React from "react";
import PropTypes from "prop-types";
import Stars from "../Stars/Stars";
import "./favouriteTopic.scss";

const FavouriteTopic = (props) => {
  return (
    <div className="favourite-topic">
      <div className="topic-img favourites-topic-img">
        <img src={`/${props.image}`} alt={props.topic} />
      </div>
      <div className="information-for-topic">
        <h3>{props.topic}</h3>
        <Stars rating={props.rating} />
      </div>
    </div>
  );
};

FavouriteTopic.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  topic: PropTypes.string,
  rating: PropTypes.number,
  name: PropTypes.string,
};

export default FavouriteTopic;
