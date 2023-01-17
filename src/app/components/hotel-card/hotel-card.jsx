import classNames from "classnames";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import s from "./hotel-card.module.scss";

import logo from "../../icons/logo.svg";

export default function HotelCard({ isFavorited }) {
  return (
    <div>
      <div className={s.hotelCard}>
        <div className={s.logo}>
          <img src={logo} />
        </div>
        <div className={s.hotelInfo}>
          <div className={s.name}>Moscow Marriott Grand Hotel</div>
          <div className={s.dateGroup}>
            <div className={s.date}>7 июля 2020</div>
            <div className={s.rectangle}>-</div>
            <div className={s.duration}>1 день</div>
          </div>
        </div>
        <div>
          <div className={s.priceGroup}>
            <button>
              <FavoriteBorderIcon color="primary" />
            </button>
            <div>
              <div>Price:</div>
              <div>23 532</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
