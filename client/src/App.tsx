import React from 'react';
// import { Button } from 'flowbite-react';
import './App.css';
import { Provider } from 'react-redux';
import AdminStates from './components/AdminPage/Admin';
import store from './redux/store';


function App(): JSX.Element {
  return (  
    <Provider store={store}>
    <AdminStates/>
    </Provider>
  );
}



export default App;
