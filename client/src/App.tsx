import React from 'react';
import { Button } from 'flowbite-react';
import './App.css';
import { Provider } from 'react-redux';
import Calculator from './components/MainPage/Calculator/Calculator';
import store from './Redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Button>Работает</Button>;
      <Calculator />
    </Provider>
  );
}

export default App;
