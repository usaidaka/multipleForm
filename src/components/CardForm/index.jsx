import React from "react";
import classes from "./style.module.scss";

const CardForm = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes["card-container"]}>{children}</div>
    </div>
  );
};

export default CardForm;
