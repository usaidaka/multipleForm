import React, { useEffect, useState } from "react";
import classes from "./style.module.scss";
import ButtonNav from "../../../../components/ButtonNav";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../action";

const CardContentFour = () => {
  const userData = useSelector((state) => state.homeReducer.userData);
  const [plan, setPlan] = useState(userData.plan || "");
  const [price, setPrice] = useState(userData.dataPlan?.price || "");
  const [addOns, setAddOns] = useState(userData?.addOns || []);

  const dispatch = useDispatch();

  const onChangeStep = () => {
    dispatch(setStep(2));
  };

  useEffect(() => {
    setPlan(userData.dataPlan?.plan);
    setPrice(userData.dataPlan?.price);
    setAddOns(userData?.addOns);
  }, []);

  const totalPrice = () => {
    const regexDigit = /\d+/g;

    if (!plan) {
      return;
    }
    const planPrice = price;
    const totalPlanPrice = Number(planPrice.match(regexDigit)?.join());

    if (!addOns) {
      return;
    }
    const addOnsPrice = addOns.map((item) => {
      return Number(item.priceAddOns?.match(regexDigit));
    });

    const totalAddOnsPrice = addOnsPrice.reduce((acc, cv) => acc + cv, 0);
    return totalPlanPrice + totalAddOnsPrice;
  };

  return (
    <>
      <div className={classes["text-wrapper"]}>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes["card-wrapper"]}>
          <div className={classes["recap-plan"]}>
            <div>
              <h4>{plan}</h4>
              <p onClick={onChangeStep}>Change</p>
            </div>
            <p>{price}</p>
          </div>
          <hr />
          <div className={classes["recap-list"]}>
            {addOns?.map((item) => (
              <div className={classes.list} key={item.idAddOns}>
                <h5>{item.title}</h5>
                <p>{item.priceAddOns}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.total}>
          <h3>Total (per month)</h3>
          <p>+${totalPrice()}/mo</p>
        </div>
      </div>

      <div className={classes["button-desktop"]}>
        <ButtonNav />
      </div>
    </>
  );
};

export default CardContentFour;
