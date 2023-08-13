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
import EditProfile from './components/ProfilePage/EditProfile';
// import Profile from './components/ProfilePage/Profile';
// import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import { profileGet } from './Redux/thunks/profileThunk';
import { useAppSelector } from './Redux/hooks';
import Calculator from './components/MainPage/Calculator/Calculator';
import Contact from './components/ContactAndFeed/Contact/Contact';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
// import Strengths from './components/MainPage/Strengths/Strengths';
import OurTeam from './components/MainPage/OurTeam/OurTeam';
import Home from './components/MainPage/Home/Home';
import MainCalculator from './components/MainPage/Calculator/MainCalculator';
import Admin from './components/AdminPage/Admin';
import AdminUserList from './components/AdminPage/AdminUserList';
// import AdminStates from './components/AdminPage/Admin';
import ServicesAndPrice from './components/ServicesAndPrice/ServicesAndPrice';
import RegGoogle from './components/LogReg/Register/RegGoogle';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(navApi());
  }, []);

  useEffect(() => {
    if (user.email) {
      dispatch(profileGet(user));
    }
  }, [user]);

  return (
    <>
      <Routes>
        <Route element={<Namvbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CompanyServices" element={<OurTeam />} />
          <Route path="/digitalNomandCalculator" element={<Calculator />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/path-to-privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/user/profile" element={<EditProfile />} />
          <Route path="/user/main" element={<MainCalculator />} />
          {/* <Route path="/google"element={<RegGoogle/>} /> */}
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/admin/users" element={<AdminUserList />} />
          <Route path="/services-and-price" element={<ServicesAndPrice />} />
        </Route>
      </Routes>
      <Foot />
    </>
  );
}

export default App;