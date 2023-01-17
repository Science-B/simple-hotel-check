import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import s from "./header.module.scss";

import logOutIcon from "../../icons/logOut.svg";

export function Header() {
  const { logOut } = useAuth();
  let navigate = useNavigate();

  const handleExit = () => {
    logOut(() => navigate("/", { replace: true }));
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
