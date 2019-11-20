// jshint ignore: start
/* eslint-disable */
import React from 'react';
import './css/Input.styles.css';


export const Input = (props) => {
  const { label, placeholder } = props
  return (
    <div className="form-group" style={{ marginLeft: "auto", marginRight: "auto" }}>
      <label htmlFor="email" style={{ marginBottom: "0px", fontSize: "0.7em", fontWeight: "700", color: "#969ba6" }} >{label}</label>
      <input style={{ background: "#f9faff" }} type="email" className="form-control" id="email" placeholder={placeholder} />
    </div>
  );
};


export const MultipleInput = props => {
  const { selectOptions, label } = props;
  return (
    <div
      className="selectdiv form-group"
      style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: "0px", color: '#969ba6' }}
    >
      <label
        htmlFor="email"
        style={{
          marginBottom: '0px',
          fontSize: '0.7em',
          fontWeight: '700',
          color: '#969ba6'
        }}
      >
        {label}
      </label>
      <select style={{ borderRadius: "5px" }}>
        {selectOptions.map((option, index) => {
          return <option key={index} style={{ fontSize: "0.75em" }}>{option}</option>;
        })}
      </select>
    </div>
  );
};
