// jshint ignore: start
/* eslint-disable */
import React, { useState } from "react";
import "./homepage.styles.css";
import Button from "../../components/buttons/Button";
import BasicInformation from "../../components/forms/create-campaign/BasicInformation";
import Budget from "../../components/forms/create-campaign/Budget";
import SpecifyContent from "../../components/forms/create-campaign/SpecifyContent";
import Stepper from "../../components/stepper/Stepper";

import Sidebar from "../../components/sidebar/sidebar.component";


const CreateCampaign = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <div className="main-layout">
      <div className="row">
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-9 hv-100 main-bar" style={{ background: "#f3f3f3" }}>
          <div className="row" style={{ background: "#ffffff" }}>
            <div
              className="create-new-campaign-bar d-flex justify-content-between"
              style={{ width: "100%", padding: "13px 15px", color: "#9ba9bf", alignItems: "center" }}>
              <p style={{ marginBottom: "0px", color: "#244373", fontWeight: "700" }}>Create a New Campaign</p>
              <div className="dropdown">
                <div className="dropdown-btn">
                  <img
                    alt="user-settings"
                    src="https://pbs.twimg.com/media/EJPbx8MWkAAzQFY?format=jpg&name=360x360"
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%"
                    }}
                  />
                  <span
                    className="ml-1"
                    style={{
                      color: "#545d70",
                      fontSize: "12px",
                      fontWeight: "700"
                    }}>
                    Profile Settings
                  </span>
                  <i className="fas fa-angle-down ml-2" />
                </div>
                <div className="dropdown-content">
                  <a>Link 1</a>
                  <a>Link 2</a>
                  <a>Link 3</a>
                  <a>Link 4</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around" style={{ borderBottom: "2px solid #e5f3ec", height: "50px" }}>
            <Button title="1. BASIC INFORMATION" activeState={step === 1 ? "active" : "inactive"} onClick={() => setStep(1)} />
            <Button title="2. BUDGET & SCHEDULE" activeState={step === 2 ? "active" : "inactive"} onClick={() => setStep(2)} />
            <Button title="3. SPECIFY CONTENT" activeState={step === 3 ? "active" : "inactive"} onClick={() => setStep(3)} />
          </div>
          <Stepper activeStep={step} />
          <div className="">
            {step === 1 && <BasicInformation handlePrevStep={previousStep} handleNextStep={nextStep} />}
                      {step === 2 && <Budget handlePrevStep={previousStep} handleNextStep={nextStep} />}
            {step === 3 && <SpecifyContent handlePrevStep={previousStep} handleNextStep={nextStep} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
