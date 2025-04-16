import React from "react";
import { BackLink } from "../../Components/ui/BackLink";
import { Card, Role } from "../../Components/Card";
import "./index.scss";

export const AdminPage: React.FC = () => {
  return (
    <section className="admin__section section">
      <div className="admin__wrapper">
        <BackLink />

        <h2 className="owner__title">Лента предложений</h2>

        <div className="card__container">
          <Card
            role={Role.ADMIN}
            title="3к. квартира 55м’2"
            address="Ул. Мира, д. 10 эт. 1"
            descr="Уютная квартира на 1 этаже с видом на море"
          />
          <Card
            role={Role.ADMIN}
            title="1к. квартира 35м’2"
            address="Ул. Пушкина, д. 173 эт. 5"
            descr="Уютная квартира на 5 этаже с видом на сосновый бор"
          />
        </div>
      </div>
    </section>
  );
};
