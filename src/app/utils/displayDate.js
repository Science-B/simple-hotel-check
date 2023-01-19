export function displayDate(date) {
  const dateArr = date.split("-").reverse();
  const month = dateArr[1];
  switch (month) {
    case "01":
      return dateArr[0] + " " + "января" + " " + dateArr[2];
    case "02":
      return dateArr[0] + " " + "февраля" + " " + dateArr[2];
    case "03":
      return dateArr[0] + " " + "марта" + " " + dateArr[2];
    case "04":
      return dateArr[0] + " " + "апреля" + " " + dateArr[2];
    case "05":
      return dateArr[0] + " " + "мая" + " " + dateArr[2];
    case "06":
      return dateArr[0] + " " + "июня" + " " + dateArr[2];
    case "07":
      return dateArr[0] + " " + "июля" + " " + dateArr[2];
    case "08":
      return dateArr[0] + " " + "августа" + " " + dateArr[2];
    case "09":
      return dateArr[0] + " " + "сентября" + " " + dateArr[2];
    case "10":
      return dateArr[0] + " " + "октября" + " " + dateArr[2];
    case "11":
      return dateArr[0] + " " + "ноября" + " " + dateArr[2];
    case "12":
      return dateArr[0] + " " + "декабря" + " " + dateArr[2];

    default:
      break;
  }
}
