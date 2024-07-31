import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  return (
    <>
      <button className="btn gap" id="button" onClick={props.onClick}>
        <props.icon id="icon-btn" />
        <span className="btn-text">{props.name}</span>
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func,
};

export default Button;
