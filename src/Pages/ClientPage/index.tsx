import "./index.scss";
import { BackLink } from "../../Components/ui/BackLink";
import { Button } from "../../Components/ui/Button/Button";
import { useState } from "react";
import { Card, Role } from "../../Components/Card";

type filterType = {
  id: number;
  text: string;
};

export const ClientPage = () => {
  const [activeRemont, setActiveRemont] = useState<number>(0);
  const [activeRooms, setActiveRooms] = useState<number[]>([]);
  const [activeSearch, setActiveSearch] = useState<boolean>(false);

  const toggleRoom = (id: number) => {
    setActiveRooms((prev) =>
      prev.includes(id) ? prev.filter((roomId) => roomId !== id) : [...prev, id]
    );
  };

  const resetFilter = () => {
    setActiveRemont(0);
    setActiveRooms([]);
    setActiveSearch(false);
  };

  const filterRemontList: filterType[] = [
    {
      id: 0,
      text: "Без ремонта",
    },
    {
      id: 1,
      text: "С ремонтом",
    },
  ];

  const filterRoomsList: filterType[] = [
    {
      id: 0,
      text: "1 комната",
    },
    {
      id: 1,
      text: "2 комнаты",
    },
    {
      id: 2,
      text: "3 комнаты",
    },
  ];

  return (
    <section className="client__section section">
      <div className="client__wrapper">
        <BackLink />

        <p className="client__descr">Фильтры</p>
        <div className="client__filter__wrapper">
          <div className="filter">
            <div className="filter__remont">
              {filterRemontList.map((item) => (
                <Button
                  onClick={() => setActiveRemont(item.id)}
                  isActive={activeRemont === item.id}
                  key={item.id}
                >
                  {item.text}
                </Button>
              ))}
            </div>
            <div className="filter__rooms">
              {filterRoomsList.map((item) => (
                <Button
                  onClick={() => toggleRoom(item.id)}
                  isActive={activeRooms.includes(item.id)}
                  key={item.id}
                >
                  {item.text}
                </Button>
              ))}
            </div>
          </div>
          <div className="filter__btns">
            <Button onClick={resetFilter}>Сбросить фильтры</Button>
            <Button
              onClick={() => setActiveSearch(true)}
              isActive={activeSearch}
            >
              Начать поиск
            </Button>
          </div>
        </div>
        {activeSearch && (
          <div>
            <h2 className="search__title">Результат поиска:</h2>
            <div className="card__container">
              <Card
                role={Role.CLIENT}
                title="3к. квартира 55м’2"
                address="Ул. Мира, д. 10 эт. 1"
                descr="Уютная квартира на 1 этаже с видом на море"
              />
              <Card
                role={Role.CLIENT}
                title="3к. квартира 55м’2"
                address="Ул. Мира, д. 10 эт. 1"
                descr="Уютная квартира на 1 этаже с видом на море"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
