import React from 'react';
import { Button } from 'flowbite-react';
import './App.css';
import AboutСompany from './components/AboutСompany/AboutСompany';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

function App(): JSX.Element {
  return (
    <>
      <AboutСompany />
      <PrivacyPolicy />
      <FeedbackForm />
    </>
  );
}

export default App;
