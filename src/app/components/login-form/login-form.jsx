import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { loggedIn } from "../../store/user";

import TextField from "../form/text-field";
import Button from "../button";

import { validator } from "../../utils/validator";

import s from "./login-form.module.scss";

export default function LogInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    login: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const isValid = Object.keys(errors).length === 0;
  useEffect(() => {
    validate();
  }, [data]);

  const validatorConfig = {
    login: {
      isRequired: {
        message: "Логин обязателен для заполнения",
      },
      сyrillic: {
        message: "Логин содержит кириллицу или спец. символы",
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
      сyrillic: {
        message: "Пароль содержит кириллицу или спец. символы",
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

  function handleChange(target) {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  function validate() {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    dispatch(loggedIn(data));
    navigate("/main", { replace: true });
  }
}
