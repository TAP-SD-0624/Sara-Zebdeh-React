import React from "react";
import PropTypes from "prop-types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./stars.scss";

const Stars = (props) => {
  // Calculate how many full stars and empty stars are needed
  const fullStars = Math.floor(props.rating);
  const hasHalfStar = props.rating % 1 !== 0;

  const renderStars = () => {
    let stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar className={props.isForDetails ? "star-details" : "star"} key={i} />);
    }

    // Half star if applicable
    if (hasHalfStar) {
      stars.push(
        <AiFillStar className={props.isForDetails ? "star-details" : "star"} key="half" style={{ opacity: 0.5 }} />
      );
    }

    // Empty stars
    const remainingStars = 5 - Math.ceil(props.rating); // Remaining empty stars
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<AiOutlineStar className={props.isForDetails ? "star-details" : "star"} key={`empty-${i}`} />);
    }

    return stars;
  };

  return (
    <div className={props.isForDetails ? "star-rating-details" : "star-rating"}>
      {renderStars()}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
  isForDetails: PropTypes.bool,
};

export default Stars;
