import s from "./text-field.module.scss";

export default function TextField({
  label,
  type,
  name,
  value,
  onChange,
  error,
}) {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className={s.form}>
      <label className={s.formLabel} htmlFor={name}>
        {label}
      </label>
      <input
        className={s.formInput}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
}
