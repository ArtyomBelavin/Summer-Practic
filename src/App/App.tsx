import { Route, Routes } from "react-router-dom";
import "./app.scss";
import { HomePage } from "../Pages/HomePage";
import { Layout } from "../Components/Layout";
import { ClientPage } from "../Pages/ClientPage";
import { OwnerPage } from "../Pages/OwnerPage";
import { AdminPage } from "../Pages/AdminPage";
import { ContactPage } from "../Pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/owner" element={<OwnerPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
