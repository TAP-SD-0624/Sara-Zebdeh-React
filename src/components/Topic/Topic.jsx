import React from "react";
import PropTypes from "prop-types";
import Stars from "../Stars/Stars";
import { Link, useNavigate } from "react-router-dom";
import "./topic.scss";

const Topic = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topic/${props.id}`);
  };

  return (
    // <Link to={`/topic/${props.id}`} key={props.id}>
    <div className="topic" onClick={handleClick}>
      <div className="topic-img">
        <img src={`/${props.image}`} alt={props.topic} />
      </div>
      <div className="information-for-topic">
        <p className="topicCategory">{props.category}</p>
        <h3>{props.topic}</h3>
        <Stars rating={props.rating} />
        <p className="auther-p">Author: {props.name}</p>
      </div>
    </div>
    // </Link>
  );
};

Topic.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Topic;
