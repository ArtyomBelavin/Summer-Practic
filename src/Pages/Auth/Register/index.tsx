import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackLink } from "../../../Components/ui/BackLink";

export const adminPassword = "admin";

export const Reg: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordInputFirst !== passwordInputSecond) {
      alert("Пароли не совпадают");
    } else {
      navigate("/client");
    }

    if (
      passwordInputFirst === adminPassword &&
      passwordInputSecond === adminPassword
    ) {
      navigate("/client");
    }
  };
  const [changeTypeFirst, setChangeTypeFirst] = useState(false);
  const [changeTypeSecond, setChangeTypeSecond] = useState(false);

  const [passwordInputFirst, setPasswordInputFirst] = useState("");
  const [passwordInputSecond, setPasswordInputSecond] = useState("");

  return (
    <section className="auth__section section">
      <BackLink />
      <form className="auth__form" onSubmit={handleSubmit}>
        <h3 className="auth__title">Регистрация</h3>
        <label>
          Логин
          <input type="text" placeholder="Введите логин" required />
        </label>
        <label>
          Почта
          <input type="email" placeholder="Введите почту" required />
        </label>
        <label>
          Пароль
          <div>
            <input
              value={passwordInputFirst}
              onChange={(e) => setPasswordInputFirst(e.target.value)}
              type={changeTypeFirst ? "text" : "password"}
              placeholder="Введите пароль"
              required
            />
            <button
              type="button"
              onClick={() => setChangeTypeFirst(!changeTypeFirst)}
            >
              {changeTypeFirst ? "Скрыть" : "Показать "}
            </button>
          </div>
        </label>
        <label>
          Повторите пароль
          <div>
            <input
              value={passwordInputSecond}
              onChange={(e) => setPasswordInputSecond(e.target.value)}
              type={changeTypeSecond ? "text" : "password"}
              placeholder="Введите пароль"
              required
            />
            <button
              type="button"
              onClick={() => setChangeTypeSecond(!changeTypeSecond)}
            >
              {changeTypeSecond ? "Скрыть" : "Показать "}
            </button>
          </div>
        </label>
        <button className="auth__btn">Войти</button>
      </form>
    </section>
  );
};
