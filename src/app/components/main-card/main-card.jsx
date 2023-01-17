import Slider from "../slider/";

import s from "./main-card.module.scss";

import arrowIcon from "../../icons/arrow.svg";
import HotelCard from "../hotel-card/hotel-card";

export default function MainCard({ hotels }) {
  console.log("эх", hotels);
  return (
    <div className={s.mainCard}>
      <div className={s.wrap}>
        <div className={s.bookingGroup}>
          <div className={s.hotelsInfo}>
            <div className={s.hotel}>Отели</div>
            <img className={s.arrow} src={arrowIcon} alt="arrow" />
            <div className={s.location}>City</div>
          </div>
          <div className={s.date}>Date</div>
        </div>
        <Slider />
        <div className={s.favoritedCount}>
          <div>Добавлено в Избранное:</div>
          <div>count отеля</div>
        </div>
        <div>{hotels && hotels.map((el) => <HotelCard />)}</div>
      </div>
    </div>
  );
}
