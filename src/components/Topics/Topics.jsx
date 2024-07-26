import React from "react";
import Topic from "../Topic/Topic";
import PropTypes from "prop-types";
import "./topics.scss";

const Topics = (props) => (
  <div className="topics-container">
    {props.topics.map((topic) => (
      // eslint-disable-next-line react/jsx-key
      <Topic
        id={topic.id}
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
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default Topics;
