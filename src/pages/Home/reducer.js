import { produce } from "immer";
import { SET_USER_DATA, SET_STEP } from "./constant";

export const initialState = {
  userData: {},
  step: 1,
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER_DATA:
        draft.userData = action.userData;
        break;
      case SET_STEP:
        draft.step = action.step;
        break;

      default:
        break;
    }
  });

export default homeReducer;
