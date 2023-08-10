import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Login from './components/LogReg/Login/Login';
import Register from './components/LogReg/Register/Register';
import Namvbar from './components/Namvbar/Namvbar';
import Foot from './components/Foot/Foot';
import AboutCompany from './components/AboutСompany/AboutСompany';
import navApi from './Redux/thunks/user/nav.api';
import CompanyServices from './components/MainPage/CompanyServices/CompanyServices';
import Calculator from './components/MainPage/Calculator/Calculator';
import Contact from './components/ContactAndFeed/Contact/Contact';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navApi());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Namvbar />}>
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CompanyServices" element={<CompanyServices />} />
          <Route path="/digitalNomandCalculator" element={<Calculator />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/politika-konfidenczialnosti" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
      <Foot />
    </>
  );
}

export default App;
