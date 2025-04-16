import React from "react";
import "./index.scss";
import { BackLink } from "../../Components/ui/BackLink";
import { useNavigate } from "react-router-dom";

type phoneListType = {
  id: number;
  text: string;
};

export const ContactPage: React.FC = () => {
  const phoneList: phoneListType[] = [
    {
      id: 0,
      text: "Общий контакт:",
    },
    {
      id: 1,
      text: "Отдел продаж:",
    },
    {
      id: 2,
      text: "Техническая поддержка:",
    },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <section className="contact__section section">
      <div className="contact__wrapper">
        <BackLink />

        <h2 className="contact__title">Контактная информация</h2>

        <div className="contact__form__wrapper">
          <h3 className="contact__form__address">
            Адрес агентства: <br />
            г. Москва, ул. Примерная, д. 1, офис 101
          </h3>
          <h3 className="contact__form__phone">
            Телефонные номера: <br />
            <ul className="phone__list">
              {phoneList.map((item) => (
                <li key={item.id} className="phone__item">
                  {item.text} +7 (495) 123-45-67
                </li>
              ))}
            </ul>
          </h3>

          <form onSubmit={handleSubmit} className="contact__form__form">
            <h3 className="contact__form__message"></h3>
            Форма для обратной связи:
            <label>
              Имя
              <input type="text" placeholder="Ваше имя" required />
            </label>
            <label>
              Почта
              <input type="email" placeholder="Ваше имя" required />
            </label>
            <label>
              Сообщение
              <textarea placeholder="Ваше сообщение"></textarea>
            </label>
            <button className="form__btn">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};
