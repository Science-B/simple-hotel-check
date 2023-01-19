import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { Header } from "../components/header/header";
import BookingCard from "../components/booking-card";
import FavoritedCard from "../components/favorited-card/favorited-card";
import MainCard from "../components/main-card/main-card";

import { getHotels, loadHotelsList } from "../store/hotels";

import s from "./main-page.module.scss";
import {
  addHotel,
  allHotelsRemoved,
  getFavoritedHotels,
  removeHotel,
  updateHotels,
} from "../store/favoritedHotels";

export default function MainPage() {
  const [sortOptionRate, setSortOptionRate] = useState("asc");
  const [sortOptionPrice, setSortOptionPrice] = useState("asc");
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

  const sortByRate = (arr) => {
    const temp = [...arr];
    if (sortOptionRate === "asc") {
      temp.sort((a, b) => (a.rate > b.rate ? -1 : 1));
      setSortOptionRate("desc");
      dispatch(updateHotels(temp));
    } else if (sortOptionRate === "desc") {
      temp.sort((a, b) => (a.rate > b.rate ? 1 : -1));
      setSortOptionRate("asc");
      dispatch(updateHotels(temp));
    }
  };
  const sortByPrice = (arr) => {
    const temp = [...arr];
    if (sortOptionPrice === "asc") {
      temp.sort((a, b) => (a.price > b.price ? -1 : 1));
      setSortOptionPrice("desc");
      dispatch(updateHotels(temp));
    } else if (sortOptionPrice === "desc") {
      temp.sort((a, b) => (a.price > b.price ? 1 : -1));
      setSortOptionPrice("asc");
      dispatch(updateHotels(temp));
    }
  };

  const handleClear = () => {
    dispatch(allHotelsRemoved());
  };
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <div className={s.row}>
          <BookingCard />
          <FavoritedCard
            favoritedHotels={favoritedHotels.entities}
            onClick={handleClick}
            onSortRate={sortByRate}
            rateOption={sortOptionRate}
            priceOption={sortOptionPrice}
            onSortPrice={sortByPrice}
            onClear={handleClear}
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
