import React from "react";
import classes from "./style.module.scss";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../pages/Home/action";

const ButtonNav = ({ action = () => {} }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.homeReducer.step);

  const onNextStep = () => {
    dispatch(setStep(currentStep + 1));
  };

  const onPrevStep = () => {
    dispatch(setStep(currentStep - 1));
  };
  return (
    <div className={classes["button-wrapper"]}>
      {currentStep !== 1 ? (
        <Button onClick={() => onPrevStep()} className={classes.back}>
          back
        </Button>
      ) : (
        <div></div>
      )}
      <Button
        onClick={() => {
          action();
          onNextStep();
        }}
        variant="contained"
        className={classes.next}
        type="submit"
      >
        next step
      </Button>
    </div>
  );
};

export default ButtonNav;
