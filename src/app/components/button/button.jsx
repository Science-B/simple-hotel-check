import s from "./button.module.scss";

export default function Button({ name, disabled, type, path }) {
  return (
    <button
      className={s.formButton}
      type={type}
      disabled={disabled ? disabled : false}
    >
      {name}
    </button>
  );
}
