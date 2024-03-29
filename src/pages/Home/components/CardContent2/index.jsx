import React, { useEffect, useState } from "react";
import classes from "./style.module.scss";
import arcade from "../../../../assets/icon-arcade.svg";
import advance from "../../../../assets/icon-advanced.svg";
import pro from "../../../../assets/icon-pro.svg";
import ToggleSwitch from "../../../../components/ToggleSwitch";
import ButtonNav from "../../../../components/ButtonNav";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../action";

const cardData = [
  {
    no: 1,
    logo: arcade,
    name: "arcade",
    price: "$9/mo",
    yearly: {
      price: "$90/yr",
      discount: "2 months free",
    },
  },
  {
    no: 2,
    logo: advance,
    name: "advance",
    price: "$12/mo",
    yearly: {
      price: "$120/yr",
      discount: "2 months free",
    },
  },
  {
    no: 3,
    logo: pro,
    name: "pro",
    price: "$15/mo",
    yearly: {
      price: "$150/yr",
      discount: "2 months free",
    },
  },
];
const CardContentTwo = () => {
  const userData = useSelector((state) => state.homeReducer?.userData);
  const [isYearly, setIsYearly] = useState(
    userData.dataPlan?.isYearly || false
  );
  const [selectedCard, setSelectedCard] = useState(
    userData.dataPlan?.idPlan || null
  );
  const [dataPlan, setDataPlan] = useState(
    {
      idPlan: userData.dataPlan?.idPlan,
      plan: userData.dataPlan?.plan,
      price: userData.dataPlan?.price,
      isYearly: userData.dataPlan?.isYearly,
    } || {}
  );
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setUserData({ ...userData, dataPlan: dataPlan }));
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleColectData = (idPlan, name, price, yearlyPrice) => {
    setDataPlan({
      idPlan: idPlan,
      plan: name,
      price: `${isYearly ? yearlyPrice : price}`,
      isYearly: isYearly,
    });
  };

  useEffect(() => {
    if (userData.dataPlan?.isYearly) {
      setIsYearly(userData.dataPlan?.isYearly);
    }
    if (userData.dataPlan?.idPlan) {
      setSelectedCard(userData.dataPlan?.idPlan);
    }
    if (userData.name && userData.email && userData.phone) {
      setDataPlan({
        idPlan: userData.dataPlan?.idPlan,
        plan: userData.dataPlan?.plan,
        price: userData.dataPlan?.price,
        isYearly: userData.dataPlan?.isYearly,
      });
    }
  }, []);

  return (
    <>
      <div className={classes["text-wrapper"]}>
        <h2>Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className={classes["card-wrapper"]}>
        {cardData.map((item) => (
          <div
            key={item.no}
            className={`${classes.card} ${
              selectedCard === item.no ? classes.selected : ""
            }`}
            onClick={() => {
              handleCardClick(item.no);
              handleColectData(
                item.no,
                item.name,
                item.price,
                item.yearly.price
              );
            }}
          >
            <img src={item.logo} alt="" />
            <div>
              <p className={classes.name}>{item.name}</p>
              {isYearly ? (
                <>
                  <p className={classes.price}>{item.yearly.price}</p>
                  <p className={classes.discount}>{item.yearly.discount}</p>
                </>
              ) : (
                <p className={classes.price}>{item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={classes["toggle-wrapper"]}>
        <ToggleSwitch
          month={"Monthly"}
          year={"Yearly"}
          getter={isYearly}
          setter={setIsYearly}
          reset={setSelectedCard}
        />
      </div>
      <div className={classes["button-desktop"]}>
        {!selectedCard || !dataPlan ? (
          <ButtonNav disable={true} />
        ) : (
          <ButtonNav action={onSubmit} />
        )}
      </div>
    </>
  );
};

export default CardContentTwo;
