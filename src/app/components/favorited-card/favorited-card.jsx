import HotelCard from "../hotel-card/hotel-card";
import s from "./favorited-card.module.scss";

export default function FavoritedCard() {
  return (
    <div className={s.favoritedCard}>
      <div className={s.formsGroup}>
        <div className={s.name}>Избранное</div>
        <div className={s.filter}>
          <div className={s.rateFilter}>
            <div>Рейтинг</div>
            <div>+-</div>
          </div>
          <div className={s.priceFilter}>
            <div>Цена</div>
            <div>+-</div>
          </div>
        </div>
        <HotelCard />
      </div>
    </div>
  );
}
