import React from "react";
import thanks from "../../../../assets/icon-thank-you.svg";
import classes from "./style.module.scss";

const CardContentFive = () => {
  return (
    <div className={classes["thank-container"]}>
      <img src={thanks} alt="" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default CardContentFive;
