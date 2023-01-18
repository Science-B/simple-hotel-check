import classNames from "classnames";

import { displayDate } from "../../utils/displayDate";

import s from "./hotel-card.module.scss";

import logo from "../../icons/logo.svg";

export default function HotelCard({ isFavorited, name, days, date }) {
  console.log("date from hotelCard", displayDate("1111-11-11"));
  return (
    <div>
      <div className={s.hotelCard}>
        <div className={s.logoGroup}>
          <div className={s.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.hotelInfo}>
            <div className={s.name}>{name}</div>
            <div className={s.dateGroup}>
              <div className={s.date}>{displayDate(date)}</div>
              <div className={s.rectangle}>-</div>
              <div className={s.duration}>{`${days} дней`}</div>
            </div>
          </div>
        </div>

        <div className={s.priceGroup}>
          <div>
            <button className={s.btn}></button>
            <div>
              <div>Price: 23 195 P</div>
            </div>
          </div>
        </div>
      </div>
      <hr className={s.hr} />
    </div>
  );
}
