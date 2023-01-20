import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga/hotels";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import hotelsReducer from "./hotels";
import userReducer from "./user";
import favoritedHotelsReducer from "./favoritedHotels";

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  user: userReducer,
  favoritedHotels: favoritedHotelsReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleWare),
});

export const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);
export default store;
