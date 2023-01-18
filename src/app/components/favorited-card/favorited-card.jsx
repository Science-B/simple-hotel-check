import HotelCard from "../hotel-card/hotel-card";
import s from "./favorited-card.module.scss";

export default function FavoritedCard({ favoritedHotels, city, onClick }) {
  console.log("date from favor", favoritedHotels);
  return (
    <div className={s.favoritedCard}>
      <div className={s.formsGroup}>
        <div className={s.name}>Избранное</div>
        <div className={s.filter}>
          <div className={s.rateFilter}>
            <button className={s.btn}>Рейтинг</button>
            {/* <div>+-</div> */}
          </div>
          <div className={s.priceFilter}>
            <button className={s.btn}>Цена</button>
            {/* <div>+-</div> */}
          </div>
        </div>
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
                onClick={onClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
