import s from "./favorited-card.module.scss";

export default function FavoritedCard() {
  return (
    <div className={s.favoritedCard}>
      <div>Избранное</div>
      <div>
        <div>
          <div>Рейтинг</div>
          <div>v</div>
        </div>
        <div>
          <div>Цена</div>
          <div>v</div>
        </div>
      </div>
      <div>
        <div>Moscow Marriott Grand Hotel</div>
        <div>O</div>
      </div>
      <div>
        <div>28 June, 2020</div>
        <div>-</div>
        <div>1 день</div>
      </div>
      <div>
        <div>☆☆☆☆☆</div>
        <div>Price:</div>
        <div>23 924 р</div>
      </div>
    </div>
  );
}
