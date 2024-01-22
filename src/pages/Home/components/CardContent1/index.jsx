import React, { useEffect, useRef, useState } from "react";
import classes from "./style.module.scss";
import ButtonNav from "../../../../components/ButtonNav";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setUserData } from "../../action";

const CardContentOne = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.homeReducer.userData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = () => {
    dispatch(setUserData({ name, email, phone }));
  };

  useEffect(() => {
    if (userData.name) {
      setName(userData.name);
    }
    if (userData.email) {
      setEmail(userData.email);
    }
    if (userData.phone) {
      setPhone(userData.phone);
    }
  });

  return (
    <>
      <div className={classes["text-wrapper"]}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>
      </div>
      <div className={classes["form-wrapper"]}>
        <form action="" onSubmit={onSubmit}>
          <div className={classes.form}>
            <label htmlFor="">Name</label>
            <input
              placeholder="e.g. Stephen King"
              type="text"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
            />
          </div>
          <div className={classes.form}>
            <label htmlFor="">Email Address</label>
            <input
              placeholder="e.g. stephenking@gmail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
          </div>
          <div className={classes.form}>
            <label htmlFor="">Phone Number</label>
            <input
              placeholder="e.g. +1 234 567 890"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              defaultValue={phone}
            />
          </div>

          <div className={classes["button-desktop"]}>
            <ButtonNav action={onSubmit} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CardContentOne;
