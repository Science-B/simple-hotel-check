import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getFavoritedHotels, removeHotel } from "../../store/favoritedHotels";
import { updateHotels, allHotelsRemoved } from "../../store/favoritedHotels";

import HotelCard from "../hotel-card/hotel-card";
import s from "./favorited-card.module.scss";

import upIcon from "../../icons/up.svg";
import downIcon from "../../icons/down.svg";

export default function FavoritedCard() {
  const dispatch = useDispatch();
  const favoritedHotels = useSelector(getFavoritedHotels()).entities;
  const [sortOptionRate, setSortOptionRate] = useState("asc");
  const [sortOptionPrice, setSortOptionPrice] = useState("asc");

  return (
    <div className={s.favoritedCard}>
      <div className={s.formsGroup}>
        <div className={s.name}>Избранное</div>
        {favoritedHotels.length ? (
          <div className={s.filter}>
            <div className={s.rateFilter}>
              <div
                className={s.btn}
                onClick={() => sortByRate(favoritedHotels)}
              >
                <div className={s.filterText}>Рейтинг</div>
                <img
                  alt=""
                  src={sortOptionRate === "asc" ? downIcon : upIcon}
                />
              </div>
            </div>
            <div className={s.priceFilter}>
              <div
                onClick={() => sortByPrice(favoritedHotels)}
                className={s.btn}
              >
                <div className={s.filterText}>Цена</div>
                <img
                  alt=""
                  src={sortOptionPrice === "asc" ? downIcon : upIcon}
                />
              </div>
            </div>
            <div className={s.priceFilter}>
              <div
                onClick={() => dispatch(allHotelsRemoved())}
                className={s.btn}
              >
                <div>Очистить</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={s.hotels}>
          {favoritedHotels &&
            favoritedHotels.map((hotel) => (
              <HotelCard
                isLiked={true}
                name={hotel.label}
                days={hotel.days}
                date={hotel.date}
                id={hotel.id}
                isFavorited={true}
                price={hotel.price}
                rate={hotel.rate}
                onClick={() => dispatch(removeHotel(hotel.id))}
              />
            ))}
        </div>
      </div>
    </div>
  );
  function sortByRate(arr) {
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
  }
  function sortByPrice(arr) {
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
  }
}
