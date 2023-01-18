import classNames from "classnames";

import s from "./text-field.module.scss";

export default function TextField({
  label,
  type,
  name,
  value,
  onChange,
  error,
  booking,
}) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className={s.form}>
      <label
        className={classNames(s.formLabel, booking && s.booking)}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={classNames(s.formInput, booking && s.booking)}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        min={value}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
}
