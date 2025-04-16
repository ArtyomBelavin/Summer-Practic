import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { BackLink } from "../../../Components/ui/BackLink";
import { adminPassword } from "../Register";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      passwordInputValue === adminPassword &&
      loginInputValue === adminPassword
    ) {
      navigate("/admin");
    } else {
      navigate("/client");
    }
  };
  const [changeType, setChangeType] = useState(false);

  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [loginInputValue, setLoginInputValue] = useState("");

  return (
    <section className="auth__section section">
      <BackLink />
      <form className="auth__form" onSubmit={handleSubmit}>
        <h3 className="auth__title">Войти</h3>
        <label>
          Логин
          <input
            value={loginInputValue}
            onChange={(e) => setLoginInputValue(e.target.value)}
            type="text"
            placeholder="Введите логин"
            required
          />
        </label>
        <label>
          Пароль
          <div>
            <input
              value={passwordInputValue}
              onChange={(e) => setPasswordInputValue(e.target.value)}
              type={changeType ? "text" : "password"}
              placeholder="Введите пароль"
              required
            />
            <button type="button" onClick={() => setChangeType(!changeType)}>
              {changeType ? "Скрыть" : "Показать "}
            </button>
          </div>
        </label>
        <button className="auth__btn">Войти</button>
      </form>
    </section>
  );
};
