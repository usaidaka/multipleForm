import { SET_USER_DATA, SET_STEP } from "./constant";

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  userData,
});

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});
