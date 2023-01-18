import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedOut } from "../../store/user";
import { allHotelsRemoved } from "../../store/favoritedHotels";
import s from "./header.module.scss";

import logOutIcon from "../../icons/logOut.svg";

export function Header() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleExit = () => {
    dispatch(loggedOut());
    dispatch(allHotelsRemoved());
    navigate("/", { replace: true });
  };

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
