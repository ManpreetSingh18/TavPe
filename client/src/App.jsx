import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./pages/logout";
import { Service } from "./pages/Service";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUsers } from "./pages/Admin-Users";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />

          <Route path="*" element={<Error />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
