import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import "./Stepper.styles.css"

const useStyles = makeStyles({
  root: {
    maxWidth: "100vw",
    flexGrow: 1,
    background: "#F3F3F3"
  }
});

export default function ProgressMobileStepper ({ activeStep }) {
  const classes = useStyles();

  return (
    <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={activeStep}
      className={classes.root}
    />
  );
}
