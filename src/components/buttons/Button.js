// jshint ignore: start
/* eslint-disable */
import React from 'react';
import './css/Button.styles.css'

const Buttons = (props) => {
  const { title, activeState, onClick } = props;
  return (
    <div className={`button-holder`} width="100%">
      <div className={`step-button-${ activeState }`} onClick={onClick}>
        <p>{title}</p>
      </div>
    </div>
  )
}

export const NextStepButton = (props) => {
  const { label, onClick } = props;
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "1.5em" }}>
        <button onClick={onClick} style={{ padding: "5px 40px", borderRadius: "5px", color: "white", background: "#30bc7a", fontWeight: "700", fontSize: "0.8em" }}>{label}</button>
      </div>
    </>
  )
}
export default Buttons;