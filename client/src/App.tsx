import React, { useEffect, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Login from './components/LogReg/Login/Login';
import Register from './components/LogReg/Register/Register';
import Namvbar from './components/Namvbar/Namvbar';
import Foot from './components/Foot/Foot';
import AboutCompany from './components/AboutСompany/AboutСompany';
import navApi from './Redux/thunks/user/nav.api';
import EditProfile from './components/ProfilePage/EditProfile';
import { profileGet } from './Redux/thunks/profileThunk';
import { useAppSelector } from './Redux/hooks';
import Contact from './components/ContactAndFeed/Contact/Contact';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import OurTeam from './components/MainPage/OurTeam/OurTeam';
import Home from './components/MainPage/Home/Home';
import MainCalculator from './components/MainPage/Calculator/MainCalculator';
import Admin from './components/AdminPage/Admin';
import AdminUserList from './components/AdminPage/AdminUserList';
import ServicesAndPrice from './components/ServicesAndPrice/ServicesAndPrice';
import LogAdmin from './components/AdminPage/LogAdmin/LogAdmin';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.userSlice);

  useEffect(() => {

    dispatch(navApi() as never);
  }, [dispatch]);


  useEffect(() => {
    if (user.email) {
      dispatch(profileGet(user) as never);
    }
  }, [user, dispatch]);
  
  

  const navigate = useNavigate();

  type CalculatorRef = React.RefObject<HTMLFormElement | null>;

  const calculator: CalculatorRef = useRef(null);

  const scrollToBlock = (): void => {
    navigate('/');
    setTimeout(() => {
      if (calculator.current) {
        calculator.current.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 1);
  };

  return (
    <>
      <Routes>
        <Route
          element={
            <Namvbar
              scrollToBlock={() => {
                scrollToBlock();
              }}
            />
          }
        >
          <Route path="/" element={<Home calculator={calculator} />} />

          <Route path="/about" element={<AboutCompany />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CompanyServices" element={<OurTeam />} />
          <Route path="/services-and-price" element={<ServicesAndPrice />} />
          <Route path="/user/register" element={user.email ? <MainCalculator /> : <Register />} />
          <Route path="/user/login" element={user.email ? <MainCalculator /> : <Login />} />
          <Route path="/path-to-privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/user/profile" element={user.email ? <EditProfile /> : <Login />} />
          <Route path="/user/main" element={user.email ? <MainCalculator /> : <Login />} />
          <Route path="/admin" element={user.admin ? <Admin /> : <LogAdmin />} />
          <Route path="/admin/users" element={user.admin ? <AdminUserList /> : <LogAdmin />} />
          <Route path="/mainAdmin" element={user.admin ? <AdminUserList /> : <LogAdmin />} />
        </Route>
      </Routes>
      <Foot />
    </>
  );
}

export default App;
