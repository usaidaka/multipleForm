import React from "react";
import classes from "./style.module.scss";
import { useSelector } from "react-redux";

const stepBar = [
  {
    no: 1,
    step: "STEP 1",
    purpose: "YOUR INFO",
  },
  {
    no: 2,
    step: "STEP 2",
    purpose: "SELECT PLAN",
  },
  {
    no: 3,
    step: "STEP 3",
    purpose: "ADD-ONS",
  },
  {
    no: 4,
    step: "STEP 4",
    purpose: "SUMMARY",
  },
];

const StepBarDesktop = () => {
  const currentStep = useSelector((state) => state.homeReducer.step);

  return (
    <div className={classes["desktop-container"]}>
      <div>
        {stepBar.map((item) => (
          <div key={item.no} className={classes["step-wrapper"]}>
            <span
              className={
                currentStep === item.no ? classes.active : classes.title
              }
            >
              {item.no}
            </span>
            <div className={classes["description-wrapper"]}>
              <p className={classes.step}>{item.step}</p>
              <p className={classes.desc}>{item.purpose}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepBarDesktop;
