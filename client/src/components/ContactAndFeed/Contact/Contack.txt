import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

export default function Contact() {
  return (
    <div className="py-8 mb-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 text-center md:text-left">
          <div className="h-full">
            <div className="flex justify-center">
              <h2 className="text-2xl font-semibold mb-4">КОНТАКТЫ</h2>
            </div>
            <p className="mb-4">
              Мы стремимся к долгосрочному сотрудничеству с каждым клиентом, обеспечивая оперативное
              и качественное выполнение задач в соответствии с законодательством РФ и других стран.
              Взаимодействие с нашими клиентами приносит нам огромное удовольствие, и мы всегда рады
              общению – пишите и звоните нам.{' '}
            </p>
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5 inline mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                ></path>
              </svg>
              <p className="mb-0">
                «Рабочая станция» <br /> Садовническая набережная, 9 <br />
                Москва, 115035
              </p>
            </div>
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5 inline mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
              <a className="blb" href="tel:+7 (495) 018 51 81">
                +7 (495) 018 51 81
              </a>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5 inline mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
              <a className="blb" href="mailto:info@kycconsulting.ru">
                info@kycconsulting.ru
              </a>
            </div>
          </div>
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
}
