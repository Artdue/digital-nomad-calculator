import React from 'react';
import Calculator from '../Calculator/Calculator';
import Contact from '../../ContactAndFeed/Contact/Contact';
import Qualities from '../Qualities/Qualities';

export default function Home() {
  return (
    <>
      <div className=" w-full bg-red-100" style={{ height: '13cm' }}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Digital Nomad Calculator
              </h2>
              <br />
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Легко и просто ориентируйтесь в мире виз для цифровых кочевников
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative isolate overflow-hidden px-6  lg:px-8 flex justify-center"
        style={{ marginTop: '-15rem' }}
      >
        <img
          className="h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          style={{ height: '40rem' }}
          src="/src/assets/420a.png"
          alt="релокация"
        />
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 " />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center font-light text-gray-500 lg:mb-16 sm:text-2xl dark:text-gray-700">
              <p>
                Digital Nomad Calculator — идеальное руководство для определения стран, открытых для
                вашего следующего переезда. Удобное веб-приложение создано специально для
                профессионалов, желающих сочетать работу и путешествия, предлагая список стран,
                доступных для подачи заявления на визу/ВНЖ.
              </p>
            </blockquote>
          </figure>
        </div>

        {/* <div className="w-full rounded overflow-hidden shadow-lg bg-white flex flex-col p-6 md:py-8 lg:py-12 xl:py-10 md:px-8 lg:px-12 xl:px-20"> */}
        <Calculator />
        {/* </div> */}

        <div>
          <Qualities />
        </div>
        {/* <div>
          <Strengths />
        </div> */}
        {/* <div>
          <ServicesCompanies />
        </div> */}
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
}
