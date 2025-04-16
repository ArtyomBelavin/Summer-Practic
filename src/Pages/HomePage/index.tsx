import { Link } from "react-router-dom";
import "./index.scss";

export const HomePage = () => {
  return (
    <section className="home__section section">
      <div className="home__wrapper">
        <div className="home__text">
          <h1 className="home__title">
            Мы агенство по аренде квартир “Lorem Ipsum”
          </h1>
          <p className="home__descr">
            Мы рады представить вам удобную платформу для поиска жилья!
          </p>

          <div className="home__btns">
            <Link className="home__link" to="/client">
              Начать поиск
            </Link>
            <Link className="home__link" to="/owner">
              Выставить квартиру
            </Link>
            <Link className="home__link" to="/contact">
              О нас
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
