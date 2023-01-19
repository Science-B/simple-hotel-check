import HotelCard from "../hotel-card/hotel-card";
import s from "./favorited-card.module.scss";

import upIcon from "../../icons/up.svg";
import downIcon from "../../icons/down.svg";

export default function FavoritedCard({
  favoritedHotels,
  city,
  onClick,
  onSortRate,
  rateOption,
  priceOption,
  onSortPrice,
  onClear,
}) {
  return (
    <div className={s.favoritedCard}>
      <div className={s.formsGroup}>
        <div className={s.name}>Избранное</div>
        {favoritedHotels.length ? (
          <div className={s.filter}>
            <div className={s.rateFilter}>
              <div
                className={s.btn}
                onClick={() => onSortRate(favoritedHotels)}
              >
                <div className={s.filterText}>Рейтинг</div>
                <img src={rateOption === "asc" ? downIcon : upIcon} />
              </div>
            </div>
            <div className={s.priceFilter}>
              <div
                onClick={() => onSortPrice(favoritedHotels)}
                className={s.btn}
              >
                <div className={s.filterText}>Цена</div>
                <img src={priceOption === "asc" ? downIcon : upIcon} />
              </div>
            </div>
            <div className={s.priceFilter}>
              <div onClick={() => onClear()} className={s.btn}>
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
                city={city}
                days={hotel.days}
                date={hotel.date}
                id={hotel.id}
                isFavorited={true}
                price={hotel.price}
                rate={hotel.rate}
                onClick={onClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
