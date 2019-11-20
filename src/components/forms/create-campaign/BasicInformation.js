// jshint ignore: start
/* eslint-disable */
import React from "react";
import { MultipleInput, Input } from "../../inputs/Input";
import { NextStepButton } from "../../buttons/Button";
import "./css/BasicInformation.css";

const BasicInformation = props => {
  const { handlePrevStep, handleNextStep } = props;
  return (
    <div className="form">
      <div className="form-title" style={{ textAlign: "center" }}>
        <h6 style={{ color: "#1b3b6d" }}>Basic Information</h6>
        <p style={{ color: "#545d70", fontWeight: "300" }}>Select your Campaign objective, name and target settings</p>
      </div>
      <div className="m-auto p-4" style={{ background: "white", border: "1px", maxWidth: "100%", width: "480px", borderRadius: "9px" }}>
        <Input placeholder="FIFA World Cup With Coca-Cola" label="CAMPAIGN NAME" />
        <MultipleInput label="CAMPAIGN OBJECTIVE" selectOptions={["Awareness"]} />
        <MultipleInput label="TARGET BY GENDER" selectOptions={["Both", "Male", "Female"]} />
        <MultipleInput label="TARGET BY AGE RANGE" selectOptions={["Below 25 years old", "Below 40 years old", "Below 52 years old"]} />
      </div>
      <NextStepButton label="SAVE & CONTINUE" onClick={handleNextStep} />
    </div>
  );
};

export default BasicInformation;
