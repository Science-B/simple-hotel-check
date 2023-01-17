import { useNavigate } from "react-router-dom";

import s from "./header.module.scss";

import logOutIcon from "../../icons/logOut.svg";

export function Header() {
  let navigate = useNavigate();

  function handleExit() {
    navigate("/");
  }

  return (
    <div className={s.header}>
      <div className={s.name}>Simple Hotel Check</div>
      <div className={s.logOutGroup} onClick={handleExit}>
        <span>Выйти</span>
        <img className={s.logOutIcon} src={logOutIcon} alt="logOutIcon" />
      </div>
    </div>
  );
}
