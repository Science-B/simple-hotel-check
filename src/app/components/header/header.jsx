import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loggedOut } from "../../store/user";
import { allHotelsRemoved } from "../../store/favoritedHotels";

import s from "./header.module.scss";

import logOutIcon from "../../icons/logOut.svg";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={s.header}>
      <div className={s.name}>Simple Hotel Check</div>
      <div className={s.logOutGroup} onClick={handleExit}>
        <span>Выйти</span>
        <img className={s.logOutIcon} src={logOutIcon} alt="logOutIcon" />
      </div>
    </div>
  );
  function handleExit() {
    dispatch(loggedOut());
    dispatch(allHotelsRemoved());
    navigate("/", { replace: true });
  }
}
