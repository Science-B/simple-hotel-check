import { Header } from "../components/header/header";
import BookingCard from "../components/booking-card";
import FavoritedCard from "../components/favorited-card/favorited-card";
import MainCard from "../components/main-card/main-card";

import { getHotels, loadHotelsList } from "../store/hotels";
import { getCurrentUser } from "../store/user";

import s from "./main-page.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHotelsList());
  }, []);
  const hotels = useSelector(getHotels());
  const currentUser = useSelector(getCurrentUser());
  console.log(currentUser);
  console.log("hotels from main page", hotels);
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
