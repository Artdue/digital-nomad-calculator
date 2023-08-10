import React from 'react';
import { Link } from 'react-router-dom';

export default function Foot() {
  return (
    <div className="flex items-end w-full min-h-screen bg-white">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap border-t-4 border-yellow-300">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <Link to="/">
              <img
                className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                src="/src/assets/logo.png"
                alt="logo"
              />
            </Link>

            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a
                  href="https://www.facebook.com/kycconsulting"
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              {/* <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                About
              </h2> */}
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link to="/about" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    О компании
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/contact" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Контакты
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/CompanyServices"
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Наша команда
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    to="/politika-konfidenczialnosti"
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Политика конфиденциальности
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              {/* <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Support
              </h2> */}
              <nav className="mb-10 list-none">
                {/* <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</a>
                </li> */}
                <li className="mt-3">
                  <Link
                    to="/digitalNomandCalculator"
                    className="text-gray-500 cursor-pointer hover:text-gray-900"
                  >
                    Подбери свою страну
                  </Link>
                </li>
              </nav>
            </div>

            {/* <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Platform
              </h2>
              
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
                </li>
              </nav>

            </div> */}

            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              {/* <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
                Contact
              </h2> */}
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    info@kycconsulting.ru
                  </a>
                </li>
                {/* <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Request a Quote
                  </a>
                </li> */}
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                    +7 (495) 018 51 81
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize xl:text-center">
              © 2020 All rights reserved{' '}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
