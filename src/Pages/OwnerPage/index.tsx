import React from "react";
import { BackLink } from "../../Components/ui/BackLink";
import { Card, Role } from "../../Components/Card";
import "./index.scss";

export const OwnerPage: React.FC = () => {
  return (
    <section className="owner__section section">
      <div className="owner__wrapper">
        <BackLink />

        <h2 className="owner__title">Ваши квартиры:</h2>

        <div className="card__container card__owner">
          <Card
            role={Role.OWNER}
            title="3к. квартира 55м’2"
            address="Ул. Мира, д. 10 эт. 1"
            descr="Уютная квартира на 1 этаже с видом на море"
          />
          <Card
            role={Role.OWNER}
            title="1к. квартира 35м’2"
            address="Ул. Пушкина, д. 173 эт. 5"
            descr="Уютная квартира на 5 этаже с видом на сосновый бор"
          />
        </div>
        <div className="add__btn__wrapper">
          <button className="add__btn">Добавить</button>
        </div>
      </div>
    </section>
  );
};
