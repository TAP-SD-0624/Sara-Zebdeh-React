import React from "react";
import CardComponrnt from "../card/CardComponrnt";
import PropTypes from "prop-types";
import "./cards.css";

const CardsComponent = (props) => (
  <div className="topics-container">
    {props.topics.map((topic) => (
      // eslint-disable-next-line react/jsx-key
      <CardComponrnt
        name={topic.name}
        topic={topic.topic}
        category={topic.category}
        image={topic.image}
        rating={topic.rating}
      />
    ))}
  </div>
);

CardsComponent.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default CardsComponent;
