import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Header } from "../components/header/header";
import BookingCard from "../components/booking-card";
import FavoritedCard from "../components/favorited-card/favorited-card";
import MainCard from "../components/main-card/main-card";

import { getHotels, loadHotelsList } from "../store/hotels";

import s from "./main-page.module.scss";
import {
  addHotel,
  getFavoritedHotels,
  removeHotel,
} from "../store/favoritedHotels";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHotelsList());
  }, []);
  const hotels = useSelector(getHotels());
  const favoritedHotels = useSelector(getFavoritedHotels());

  const handleClick = (id) => {
    const favoritedHotel = hotels.entities.filter((hotel) => hotel.id === id);
    favoritedHotels.entities.includes(favoritedHotel[0])
      ? dispatch(removeHotel(favoritedHotel[0].id))
      : dispatch(addHotel(favoritedHotel[0]));
  };
  const handleToggleFavorited = () => {};
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <div className={s.row}>
          <BookingCard />
          <FavoritedCard
            favoritedHotels={favoritedHotels.entities}
            onClick={handleClick}
          />
        </div>
        <MainCard
          hotels={hotels.entities}
          onClick={handleClick}
          count={favoritedHotels.entities.length}
        />
      </div>
    </div>
  );
}
