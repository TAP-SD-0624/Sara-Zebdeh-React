import React from "react";
import PropTypes from "prop-types";
import "./select.css";

const SelectComponent = (props) => {
  return (
    <div className="select">
      <div className="select-label-container">
        <label className="label" htmlFor={props.htmlFor}>
          {props.labelText}
        </label>
        <select name={props.name} id={props.id}>
          {props.SelectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

SelectComponent.propTypes = {
  labelText: PropTypes.string.isRequired,
  SelectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SelectComponent;
