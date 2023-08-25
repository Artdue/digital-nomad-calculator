import React, { useRef } from 'react';
import * as Scroll from 'react-scroll';
// import { Link } from 'react-router-dom';

import Calculator from '../Calculator/Calculator';
import Contact from '../../ContactAndFeed/Contact/Contact';
import Qualities from '../Qualities/Qualities';
import { Link } from 'react-router-dom';
import Motivation from '../Motivation/Motivation';

export default function Home({ calculator }) {
  const calculateScroll = () => {
    window.scrollTo(0, 700);
  };

  return (
    <div>
      {/* <div
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-1 relative bg-cover bg-center "
        style={{
          backgroundImage: `url('/src/assets/translucent-image.png')`,
          backgroundSize: 'cover',
          minHeight: '850px',
        }}
      > */}
      <div className="bg-[#F4F8FD] py-14">
        {/* <div className="  mx-auto max-w-2xl lg:max-w-4xlv">
          <div className="mx-auto max-w-screen-l text-center mb-4 lg:mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-6xl font-bold tracking-tight text-[#233862]">
              Digital Nomad Calculator
            </h1>
            <br />
            <div className="mx-auto max-w-sm ">
              <p className="mt-6 text-center text-l sm:text-sm md:text-xl lg:text-[23px] lg:leading-6 text-gray-500">
                Легко и просто ориентируйтесь в мире виз для цифровых кочевников
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={calculateScroll}
                className="rounded-md m-2  px-4 h-[45px] w-[230px] py-2 text-white text-[18px] font-semibold  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2 scroll-button"
                // href="#bottom-section"
              >
                Подобрать страну
              </button>

              <Link to="/contact" className=" font-semibold text-l leading-6 text-gray-900">
                <button>Записаться на консультацию</button> <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="mx-auto lg:max-w-3xl  md:max-w-2xl  sm:max-w-2xl lg:py-14 md:py-9 py-9">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#233862] sm:text-6xl">
              Digital Nomad Calculator
            </h1>
            <p className="mt-6 text-lg leading-8  text-gray-500">
              Легко и просто ориентируйтесь в мире виз для цифровых кочевников
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}{' '}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={calculateScroll}
                className="rounded-md m-2  px-4 h-[45px] w-[230px] py-2 text-white text-[18px] font-semibold  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2 scroll-button"
                // href="#bottom-section"
              >
                Подобрать страну
              </button>

              <Link to="/contact" className=" font-semibold text-l leading-6 text-gray-900">
                <button>Записаться на консультацию</button> <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 " />
          {/* <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure>
              <blockquote className="text-center font-light text-gray-500  sm:text-2xl dark:text-gray-700">
                Digital Nomad Calculator — идеальное руководство для определения стран, открытых для
                вашего следующего переезда. Удобное веб-приложение создано специально для
                профессионалов, желающих сочетать работу и путешествия, предлагая список стран,
                доступных для подачи заявления на визу/ВНЖ.
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div id="bottom-section"></div> */}
      {/* <div className="w-full rounded overflow-hidden shadow-lg bg-white flex flex-col p-6 md:py-8 lg:py-12 xl:py-10 md:px-8 lg:px-12 xl:px-20"> */}
      <div className="">
        <Qualities />
      </div>
      <div className="bg-[#F4F8FD] py-14 " ref={calculator}>
        <Calculator />
      </div>
      <div>
        <Motivation />
      </div>

      <div className="bg-[#F4F8FD]">
        <Contact />
      </div>
    </div>
  );
}
