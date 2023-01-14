import { useEffect, useState } from "react";

import TextField from "../form/text-field";
import Button from "../button/button";
import { formatDate } from "../../utils/formatDate";

import s from "./booking-card.module.scss";

export default function BookingCard() {
  const [data, setData] = useState({
    location: "",
    date: "",
    days: "",
  });

  useEffect(() => {
    const dateNow = formatDate();
    setData((prevState) => ({
      ...prevState,
      location: "Москва",
      date: dateNow,
      days: "1",
    }));
  }, []);
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={s.bookingCard}>
      <div className={s.formsGroup}>
        <form onSubmit={handleSubmit} className={s.form}>
          <TextField
            label="Локация"
            type="text"
            name="location"
            onChange={handleChange}
            value={data.location}
            booking={true}
          />
          <TextField
            label="Дата заселения"
            type="date"
            name="date"
            id="start"
            onChange={handleChange}
            value={data.date}
            booking={true}
          />
          <TextField
            label="Количество дней"
            type="text"
            name="days"
            onChange={handleChange}
            value={data.days}
            booking={true}
          />
          <Button type="submit" name="Найти" />
        </form>
      </div>
    </div>
  );
}
