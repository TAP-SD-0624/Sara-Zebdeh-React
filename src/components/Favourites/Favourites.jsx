import React from "react";
import FavouriteTopic from "../FavouriteTopic/FavouriteTopic";
import PropTypes from "prop-types";
import "./favourites.scss";

const Favourites = (props) => {
  return (
    <div className="favourites">
      <p className="favourites-p">My Favourite Topics</p>
      <div className="favourites-div">
        {props.favouriteTopics.map((favouriteTopic) => {
          <FavouriteTopic
            id={favouriteTopic.id}
            image={favouriteTopic.image}
            topic={favouriteTopic.topic}
            rating={favouriteTopic.rating}
          />;
        })}
      </div>
    </div>
  );
};

Favourites.propTypes = {
  favouriteTopics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      topic: PropTypes.string,
      rating: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default Favourites;
