import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Login from './components/LogReg/Login/Login';
import Register from './components/LogReg/Register/Register';
import Namvbar from './components/Namvbar/Namvbar';

import navApi from './Redux/thunks/user/nav.api';
import Foot from './components/Foot/Foot';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navApi());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Namvbar />}>
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
        </Route>
      </Routes>
      <Foot />
    </>
  );
}

export default App;
