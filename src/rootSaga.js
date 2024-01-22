import { all } from "redux-saga/effects";

import homeSaga from "./pages/Home/saga";

export default function* rootSaga() {
  yield all([homeSaga()]);
}
