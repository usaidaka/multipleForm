import React, { useEffect, useState } from "react";
import classes from "./style.module.scss";
import ButtonNav from "../../../../components/ButtonNav";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../action";

const cardData = [
  {
    no: 1,
    title: "Online Service",
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
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    price: "+$2/mo",
  },
];

const CardContentThree = () => {
  const userData = useSelector((state) => state.homeReducer.userData);
  const dispatch = useDispatch();

  let initialSelected = [];
  if (userData?.addOns) {
    initialSelected = userData?.addOns.map((item) => {
      return item.idAddOns;
    });
  }

  const [selectedCards, setSelectedCards] = useState(initialSelected || []);
  const [addOnsData, setAddOnsData] = useState([]);

  const handleCheckboxChange = (item) => {
    if (selectedCards.includes(item.no)) {
      setSelectedCards(
        selectedCards.filter((selected) => selected !== item.no)
      );
    } else {
      setSelectedCards([...selectedCards, item.no]);
    }
  };

  useEffect(() => {
    handleCollectData();
  }, [selectedCards]);

  const handleCollectData = () => {
    const data = cardData
      .filter((item) => selectedCards.includes(item.no))
      .map((item) => ({
        idAddOns: item.no,
        title: item.title,
        desc: item.desc,
        priceAddOns: item.price,
      }));
    setAddOnsData(data);
  };

  const onSubmit = () => {
    dispatch(setUserData({ ...userData, addOns: addOnsData }));
  };

  return (
    <>
      <div className={classes["text-wrapper"]}>
        <h2>Pick Add-ons</h2>
        <p>Add-ons enhance your gaming experience</p>
      </div>
      <div className={classes["card-wrapper"]}>
        {cardData.map((item) => (
          <div
            key={item.no}
            className={`${classes.card} ${
              selectedCards.includes(item.no) ? classes.selected : ""
            }`}
          >
            <div className={classes["check-wrapper"]}>
              <input
                type="checkbox"
                name=""
                id=""
                checked={selectedCards.includes(item.no)}
                onChange={() => {
                  handleCheckboxChange(item);
                }}
              />
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
        <ButtonNav action={onSubmit} />
      </div>
    </>
  );
};

export default CardContentThree;
