import Slider from "../slider/";

import s from "./main-card.module.scss";

import arrowIcon from "../../icons/arrow.svg";
import HotelCard from "../hotel-card/hotel-card";
import { displayDate } from "../../utils/displayDate";
import { formatDate } from "../../utils/formatDate";

export default function MainCard({ hotels, city, onClick, count, isLiked }) {
  return (
    <div className={s.mainCard}>
      <div className={s.wrap}>
        <div className={s.bookingGroup}>
          <div className={s.hotelsInfo}>
            <div className={s.hotel}>Отели</div>
            <img className={s.arrow} src={arrowIcon} alt="arrow" />
            <div className={s.location}>{city}</div>
          </div>
          <div className={s.date}>{displayDate(formatDate())}</div>
        </div>
        <Slider />
        <div className={s.favoritedCount}>
          <div>Добавлено в Избранное:</div>
          <span className={s.count}>{count}</span>
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
                onClick={onClick}
                isLiked={isLiked}
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
}
