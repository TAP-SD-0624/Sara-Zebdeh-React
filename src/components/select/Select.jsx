import React from "react";
import PropTypes from "prop-types";
import "./select.scss";

const Select = (props) => {
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

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  SelectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
