import { put, takeLatest } from "redux-saga/effects";

import { hotelsRecived, hotelsRequestFailed } from "../hotels";

import { getRandomInt } from "../../../utils/getRandomInt";
import { formatDate } from "../../../utils/formatDate";

import hotelService from "../../../services/hotels-service";

function* workLoadHotelsListSaga({ payload }) {
  const city = payload?.location ? payload.location : "Москва";
  try {
    const { results } = yield hotelService.get(city);
    const hotels = yield results.hotels.map((el) => {
      return {
        ...el,
        rate: getRandomInt(1, 5),
        date: payload?.date ? payload.date : formatDate(),
        days: payload?.days ? payload.days : "1",
        price: getRandomInt(15, 35) + " " + getRandomInt(111, 999),
      };
    });
    yield put(hotelsRecived({ ...{ hotels }, city }));
  } catch (error) {
    yield put(hotelsRequestFailed(error.message));
  }
}

function* loadHotelsListSaga() {
  yield takeLatest("hotels/hotelsRequested", workLoadHotelsListSaga);
}

export default function* rootSaga() {
  yield loadHotelsListSaga();
}
