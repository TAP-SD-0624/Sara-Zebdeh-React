import React from "react";
import CardComponrnt from "../card/CardComponrnt";
import PropTypes from "prop-types";
import "./cards.css";

const CardsComponent = (props) => (
  <div className="topics-container">
    {props.topics.map((topic) => (
      <CardComponrnt
        name={topic.name}
        topic={topic.topic}
        category={topic.category}
        image={topic.image}
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
    })
  ),
};

export default CardsComponent;
