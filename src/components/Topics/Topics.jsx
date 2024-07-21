import React from "react";
import Topic from "../Topic/Topic";
import PropTypes from "prop-types";
import "./topics.css";

const Topics = (props) => (
  <div className="topics-container">
    {props.topics.map((topic) => (
      // eslint-disable-next-line react/jsx-key
      <Topic
        name={topic.name}
        topic={topic.topic}
        category={topic.category}
        image={topic.image}
        rating={topic.rating}
      />
    ))}
  </div>
);

Topics.propTypes = {
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

export default Topics;
