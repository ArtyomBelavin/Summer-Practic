import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
