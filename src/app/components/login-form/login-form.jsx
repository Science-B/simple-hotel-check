import { useState, useEffect } from "react";

import TextField from "../form/text-field";
import Button from "../button";
import { validator } from "../../utils/validator";

import s from "./login-form.module.scss";

export default function LogInForm() {
  const [data, setData] = useState({
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;
  useEffect(() => {
    validate();
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  const validatorConfig = {
    login: {
      isRequired: {
        message: "Логин обязателен для заполнения",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      min: {
        message: "Пароль должен состаять миниму из 8 символов",
        value: 8,
      },
    },
  };

  return (
    <div className={s.logInFormPage}>
      <div className={s.logInFormCard}>
        <span className={s.name}>Simple Hotel Check</span>
        <div className={s.formsGroup}>
          <form onSubmit={handleSubmit} className={s.form}>
            <TextField
              label="Логин"
              type="text"
              name="login"
              value={data.login}
              onChange={handleChange}
              error={errors.login}
            />
            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Button type="submit" disabled={!isValid} name="Войти" />
          </form>
        </div>
      </div>
      <div className={s.background}></div>
    </div>
  );
}
