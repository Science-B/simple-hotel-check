import goldenStar from "../icons/goldenStar.svg";
import emptyStar from "../icons/emptyStar.svg";

const MAX_STARS_COUNT = 5;

export function getRateStars(rate) {
  const starsArr = [false, false, false, false, false];
  console.log("starsArr", starsArr);
  return starsArr.map((el, index) => {
    console.log("rate, i, res", rate, index, index + 1 <= rate);
    return index + 1 <= rate;
  });
}
