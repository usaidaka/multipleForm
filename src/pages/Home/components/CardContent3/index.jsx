import React from "react";
import classes from "./style.module.scss";
import ButtonNav from "../../../../components/ButtonNav";
const cardData = [
  {
    no: 1,
    title: "Online service",
    desc: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    no: 2,
    title: "Large Storage",
    desc: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    no: 3,
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    price: "+$2/mo",
  },
];
const CardContentThree = () => {
  return (
    <>
      <div className={classes["text-wrapper"]}>
        <h2>Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className={classes["card-wrapper"]}>
        {cardData.map((item) => (
          <div key={item.no} className={classes.card}>
            <div className={classes["check-wrapper"]}>
              <input type="checkbox" name="" id="" />
              <div>
                <p className={classes.name}>{item.title}</p>
                <p className={classes.price}>{item.desc}</p>
              </div>
            </div>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className={classes["button-desktop"]}>
        <ButtonNav />
      </div>
    </>
  );
};

export default CardContentThree;
