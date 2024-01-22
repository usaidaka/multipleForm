import React from "react";
import classes from "./style.module.scss";
import { useSelector } from "react-redux";

const stepBar = [1, 2, 3, 4];

const StepBarMobile = () => {
  const currentStep = useSelector((state) => state.homeReducer.step);

  return (
    <div className={classes["step-container"]}>
      {stepBar.map((item) => (
        <span
          key={item}
          className={currentStep === item ? classes.active : classes.step}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default StepBarMobile;
