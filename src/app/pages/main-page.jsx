import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Header } from "../components/header/header";
import BookingCard from "../components/booking-card";
import FavoritedCard from "../components/favorited-card/favorited-card";
import MainCard from "../components/main-card/main-card";

import { getHotels, loadHotelsList } from "../store/hotels";

import s from "./main-page.module.scss";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHotelsList());
  }, []);
  const hotels = useSelector(getHotels());
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <div className={s.row}>
          <BookingCard />
          <FavoritedCard />
        </div>
        <MainCard
          hotels={hotels.entities}
          city={hotels.city}
          days={hotels.days}
          date={hotels.date}
        />
      </div>
    </div>
  );
}
