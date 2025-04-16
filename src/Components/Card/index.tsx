import React, { useState } from "react";
import "./index.scss";
import img from "../../App/assets/img.jpg";

export enum Role {
  CLIENT = "client",
  OWNER = "owner",
  ADMIN = "admin",
}

type CardProps = {
  role: Role;
  title: string;
  address: string;
  descr: string;
};

export const Card: React.FC<CardProps> = ({ role, title, address, descr }) => {
  const [count, setCount] = useState(1);

  const handlePrev = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleNext = () => {
    if (count < 10) setCount(count + 1);
  };

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image">
          <img width={250} src={img} alt="img" />
          <div className="card__slider">
            {count > 1 && <button onClick={handlePrev}>←</button>}
            <p>{count} из 10</p>
            {count < 10 && <button onClick={handleNext}>→</button>}
          </div>
        </div>

        <div className="card__text">
          <h3 className="card__title">{title}</h3>
          <p className="card__address">{address}</p>
          <p className="card__descr">{descr}</p>

          {role === Role.CLIENT && (
            <button className="card__btn">Подать заявку</button>
          )}

          {role === Role.OWNER && (
            <div className="card__btn__wrapper">
              <button className="card__btn">Редактировать</button>
              <button className="card__btn">Удалить</button>
            </div>
          )}

          {role === Role.ADMIN && (
            <div className="card__btn__wrapper">
              <button className="card__btn">Редактировать</button>
              <button className="card__btn">Удалить</button>
              <button className="card__btn">Связаться с автором</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
