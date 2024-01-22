import React from "react";
import classes from "./style.module.scss";
import ButtonNav from "../../../../components/ButtonNav";

const cardData = [
  {
    no: 1,
    title: "Arcade (Monthly)",
    price: "$9/mo",
  },
  { no: 2, title: "Online service", price: "$1/mo" },
  { no: 3, title: "Large storage", price: "$2/mo" },
  { no: 4, title: "Total (per month)", price: "$12/mo" },
];

const CardContentFour = () => {
  return (
    <>
      <div className={classes["text-wrapper"]}>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className={classes["card-wrapper"]}>
        {cardData.map((item) => (
          <div key={item.no} className={classes.card}>
            <div className={classes["title-wrapper"]}>
              <p className={classes.name}>{item.title}</p>
              <p>change</p>
            </div>
            <p className={classes.price + " "}>{item.price}</p>
          </div>
        ))}
      </div>

      <div className={classes["button-desktop"]}>
        <ButtonNav />
      </div>
    </>
  );
};

export default CardContentFour;
