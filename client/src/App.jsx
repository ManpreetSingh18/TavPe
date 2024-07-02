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

import { BusinessLoan } from "./pages/loan/BusinessLoan";
import { CarLoan } from "./pages/loan/CarLoan";
import { CreditCard } from "./pages/loan/CreditCard";
import { HealthInsurance } from "./pages/loan/HealthInsurance";

import { HomeLoan } from "./pages/loan/HomeLoan";
import { PersonalLoan } from "./pages/loan/PersonalLoan";
import  PhoneSignin  from "./pages/PhoneSignin";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ScrollToTop from "./components/ScrollToTop"
const App = () => {
  return (
    <>
    
      <BrowserRouter>
      <ScrollToTop/>
      <FloatingWhatsApp 
         phoneNumber="+919873888336"
         accountName="TavPe"
         avatar="https://as2.ftcdn.net/v2/jpg/01/58/21/69/1000_F_158216984_zSFxdd273rSrPmwnsK1mwukR5c2N0zWq.jpg"
         statusMessage="Typically replies within minutes"
         chatMessage="Hello! How can we help you today?"
         placeholder="Type your message..."
         notification
      />
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
          <Route path="/businessloan" element={<BusinessLoan />} />
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
