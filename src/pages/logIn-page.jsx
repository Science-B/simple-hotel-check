import LogInForm from "../components/login-form";

import s from "./logIn-page.module.scss";

export default function LogInPage() {
  return (
    <div className={s.logInFormPage}>
      <div className={s.logInForm}>
        <LogInForm />
      </div>
      <div className={s.background}></div>
    </div>
  );
}
