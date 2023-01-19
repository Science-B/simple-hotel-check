import classNames from "classnames";

import { getRateStars } from "../../utils/getRateStars";
import { displayDate } from "../../utils/displayDate";

import s from "./hotel-card.module.scss";

import logo from "../../icons/logo.svg";
import goldenStar from "../../icons/goldenStar.svg";
import emptyStar from "../../icons/emptyStar.svg";

export default function HotelCard({
  isFavorited,
  name,
  days,
  date,
  id,
  onClick,
  isLiked,
  rate,
  price,
}) {
  return (
    <div>
      <div className={s.hotelCard}>
        <div className={classNames(s.logoGroup, isFavorited && s.isFavorited)}>
          {!isFavorited && (
            <div className={s.logo}>
              <img src={logo} alt="logo" />
            </div>
          )}
          <div className={s.hotelInfo}>
            <div className={s.name}>{name}</div>
            <div className={s.dateGroup}>
              <div className={s.date}>{displayDate(date)}</div>
              <div className={s.rectangle}>-</div>
              <div className={s.duration}>{`${days} дней`}</div>
            </div>
            <div>rate:{rate}</div>
          </div>
        </div>

        <div className={classNames(s.priceGroup, isFavorited && s.isFavorited)}>
          <div>
            <svg
              width="30"
              height="30"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
                fill="white"
                stroke="#C4C4C4"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={classNames(s.heart, isLiked && s.isLiked)}
                onClick={() => onClick(id, isLiked)}
              />
            </svg>
            <div>
              <div>Price: {price} ₽</div>
            </div>
          </div>
        </div>
      </div>
      <hr className={s.hr} />
    </div>
  );
}
