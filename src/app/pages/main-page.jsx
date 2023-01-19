import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Header } from "../components/header/header";
import BookingCard from "../components/booking-card";
import FavoritedCard from "../components/favorited-card/favorited-card";
import MainCard from "../components/main-card/main-card";

import { loadHotelsList } from "../redux/store/hotels";

import s from "./main-page.module.scss";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHotelsList());
  }, []);

  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <div className={s.row}>
          <BookingCard />
          <FavoritedCard />
        </div>
        <MainCard />
      </div>
    </div>
  );
}
