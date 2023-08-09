import React from 'react';
import { Button } from 'flowbite-react';
import './App.css';
// import Calculator from './components/MainPage/Calculator/Calculator';
import MainCalculator from './components/MainPage/Calculator/MainCalculator';

function App(): JSX.Element {
  return (
    <>
      <Button>Работает</Button>;
      <MainCalculator />
    </>
  );
}

export default App;
