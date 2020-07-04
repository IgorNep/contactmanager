import React from "react";
import PropTypes from "prop-types";

export default function TextInputGroup({
  placeholder,
  label,
  name,
  value,
  onChange,
  type,
  error,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      />
    </div>
  );
}
TextInputGroup.defaultProps = {
  type: "text",
};
TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
