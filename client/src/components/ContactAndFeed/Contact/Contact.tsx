import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

export default function Contact() {
  return (
    <div className="py-8 mb-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="flex flex-wrap justify-center">
        {/* <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 text-center md:text-left"> */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
          <div className="h-full">
            <h2 className="mt-0 mb-5">
              {/* <span className="inline-block text-2xl font-medium mb-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg px-5 py-2.5 text-[#76a1dd] text-transparent bg-clip-text sm:text-base md:text-xl lg:text-2xl"> */}
              <h1 className="text-center text-[#233862] text-3xl font-bold tracking-tigh sm:text-4xl">
                Контакты{' '}
              </h1>
              {/* <h1 className="text-[#233862] text-3xl font-bold tracking-tigh sm:text-4xl">
                Контакты{' '}
              </h1> */}
            </h2>

            <figure className="">
              <blockquote className="font-light text-gray-500 lg:mb-6 sm:text-xl dark:text-gray-700">
                Мы стремимся к долгосрочному сотрудничеству с каждым клиентом, обеспечивая
                оперативное и качественное выполнение задач в соответствии с законодательством РФ и
                других стран.
              </blockquote>
            </figure>

            <div className="flex items-center mb-2">
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
              {/* <p className="mb-0">
                «Рабочая станция» <br /> Садовническая набережная, 9 <br />
                Москва, 115035
              </p> */}

              <figure className="mt-2">
                <blockquote className="font-light text-gray-500 sm:text-base dark:text-gray-700">
                  <p>
                    «Рабочая станция» <br /> Садовническая набережная, 9 <br />
                    Москва, 115035
                  </p>
                </blockquote>
              </figure>
            </div>

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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>

              <figure className="mt-2">
                <blockquote className="font-light text-gray-500 sm:text-base dark:text-gray-700">
                  <a href="tel:+7 (495) 018 51 81">+7 (495) 018 51 81</a>
                </blockquote>
              </figure>
            </div>

            <div className="flex items-center mb-4 mt-1">
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
              {/* <a className="blb" href="mailto:info@kycconsulting.ru">
                info@kycconsulting.ru
              </a> */}
              <figure className="mt-0">
                <blockquote className="font-light text-gray-500 sm:text-base dark:text-gray-700">
                  <a href="mailto:info@kycconsulting.ru">info@kycconsulting.ru</a>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
}
