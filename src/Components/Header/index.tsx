import { Link } from "react-router-dom";
import "./index.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link className="header__link" to="/">
            Главная
          </Link>
          <div className="header__auth">
            <Link className="header__link" to="auth/login">
              Войти
            </Link>
            <Link className="header__link" to="auth/reg">
              Зарегистрироваться
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
