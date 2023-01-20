import { takeLatest } from "redux-saga/effects";

function* workSaga(payload) {
  console.log("юзер вошел", payload);
  yield;
}

function* watchSaga() {
  yield takeLatest("user/loggedIn", workSaga);
}

export default function* rootSaga() {
  yield watchSaga();
}
