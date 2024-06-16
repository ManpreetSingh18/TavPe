import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ApplyLoan } from "./components/ApplyLoan";
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
import { AdminUpdate } from "./pages/Admin-Update";
import {EmiCalculator} from "./pages/emi";

import { BuisnessLoan } from "./pages/loan/BuisnessLoan";
import { CarLoan } from "./pages/loan/CarLoan";
import { CreditCard } from "./pages/loan/CreditCard";
import { HealthInsurance } from "./pages/loan/HealthInsurance";

import { HomeLoan } from "./pages/loan/HomeLoan";
import { PersonalLoan } from "./pages/loan/PersonalLoan";
import  PhoneSignin  from "./pages/PhoneSignin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Navbar1/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="/otp" element={<PhoneSignin />} />
          <Route path="/emi" element={<EmiCalculator />} />

          <Route path="/personalloan" element={<PersonalLoan/>} />
          <Route path="/homeloan" element={<HomeLoan />} />
          <Route path="/buisnessloan" element={<BuisnessLoan />} />
          <Route path="/carloan" element={<CarLoan />} />
          <Route path="/creditcard" element={<CreditCard />} />
          <Route path="/healthinsurance" element={<HealthInsurance />} />

          <Route path="*" element={<Error />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
