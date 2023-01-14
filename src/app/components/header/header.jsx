import s from "./header.module.scss";

import logOutIcon from "../../icons/logOut.svg";

export function Header() {
  return (
    <div className={s.header}>
      <div className={s.name}>Simple Hotel Check</div>
      <div className={s.logOutGroup}>
        <span>Выйти</span>
        <img className={s.logOutIcon} src={logOutIcon} alt="logOutIcon" />
      </div>
    </div>
  );
}
