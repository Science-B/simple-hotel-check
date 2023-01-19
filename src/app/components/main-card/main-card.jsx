import { useDispatch, useSelector } from "react-redux";

import { getHotels } from "../../redux/store/hotels";

import {
  addHotel,
  removeHotel,
  getFavoritedHotels,
} from "../../redux/store/favoritedHotels";

import Slider from "../slider/";

import { displayDate } from "../../utils/displayDate";
import { formatDate } from "../../utils/formatDate";

import s from "./main-card.module.scss";

import arrowIcon from "../../icons/arrow.svg";
import HotelCard from "../hotel-card/hotel-card";

export default function MainCard() {
  const dispatch = useDispatch();
  const favoritedHotelsIds = useSelector(getFavoritedHotels()).entities.map(
    (el) => el.id
  );
  const hotels = useSelector(getHotels()).entities;
  const city = useSelector(getHotels()).city;

  return (
    <div className={s.mainCard}>
      <div className={s.wrap}>
        <div className={s.bookingGroup}>
          <div className={s.hotelsInfo}>
            <div className={s.hotel}>Отели</div>
            <img className={s.arrow} src={arrowIcon} alt="arrow" />
            <div className={s.location}>{city}</div>
          </div>
          <div className={s.date}>
            {hotels.length
              ? displayDate(hotels[0].date)
              : displayDate(formatDate())}
          </div>
        </div>
        <Slider />
        <div className={s.favoritedCount}>
          <div>Добавлено в Избранное:</div>
          <span className={s.count}>{favoritedHotelsIds.length}</span>
          <div> отеля</div>
        </div>
        <div className={s.hotels}>
          {hotels.length ? (
            hotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                name={hotel.label}
                days={hotel.days}
                date={hotel.date}
                id={hotel.id}
                onClick={handleClick}
                isLiked={favoritedHotelsIds.some(
                  (favoritedHotelsId) => favoritedHotelsId === hotel.id
                )}
                rate={hotel.rate}
                price={hotel.price}
              />
            ))
          ) : (
            <p> Отели не найдены</p>
          )}
        </div>
      </div>
    </div>
  );

  function handleClick(id, isFavorited) {
    const hotel = hotels.find((el) => el.id === id);
    return isFavorited ? dispatch(removeHotel(id)) : dispatch(addHotel(hotel));
  }
}
