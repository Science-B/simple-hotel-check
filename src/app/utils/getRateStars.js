import goldenStar from "../icons/goldenStar.svg";
import emptyStar from "../icons/emptyStar.svg";

const MAX_STARS_COUNT = 5;

export function getRateStars(rate) {
  const starsArr = [false, false, false, false, false];
  return starsArr.map((el, index) => {
    return index + 1 <= rate;
  });
}
