import React from 'react';
import ServicesCompanies from '../MainPage/ServicesCompanies/ServicesCompanies';
import Strengths from '../MainPage/Strengths/Strengths';

export default function ServicesAndPrice(): React.JSX.Element {
  return (
    <>
      <div>
        <Strengths />
      </div>
      <div>
        <ServicesCompanies />
      </div>
    </>
  );
}
