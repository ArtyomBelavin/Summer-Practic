import "./index.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>Работаем с 1 января {year} года</p>
      </div>
    </footer>
  );
};
