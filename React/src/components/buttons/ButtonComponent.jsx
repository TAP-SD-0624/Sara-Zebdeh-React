import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const ButtonComponent = (props) => {
  const { name, icon: Icon } = props;
  return (
    <>
    <button className="btn gap" id="button">
      <Icon id="icon-btn" />
      <span className="btn-text">{name}</span>
    </button>
    </>
  );
};

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default ButtonComponent;