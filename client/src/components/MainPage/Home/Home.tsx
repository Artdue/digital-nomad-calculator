import React, { useRef } from 'react';
import * as Scroll from 'react-scroll';
// import { Link } from 'react-router-dom';

import Calculator from '../Calculator/Calculator';
import Contact from '../../ContactAndFeed/Contact/Contact';
import Qualities from '../Qualities/Qualities';
import { Link } from 'react-router-dom';
import Motivation from '../Motivation/Motivation';
import { Button } from '@material-tailwind/react';

export default function Home({ calculator }) {
  const calculateScroll = () => {
    window.scrollTo(0, 700);
  };

  return (
    <div>
      <div className="bg-[#F4F8FD] relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl md:max-w-2xl py-8 md:py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#233862] sm:text-6xl">
              Digital Nomad Calculator
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Легко и просто ориентируйтесь в мире виз для цифровых кочевников
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 pl-7  lg:pl-0 md:pl-7">
              <Button
                type="submit"
                onClick={calculateScroll}
                variant="gradient"
                className="rounded-full bg-[#337CE5] font-semibold text-white "
              >
                Подобрать страну
              </Button>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-[#233862]">
                Записаться на консультацию <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-14 md:py-12 lg:py-14">
            <div className="absolute inset-0 -z-10" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure>
                <blockquote className="text-center font-light text-gray-500  sm:text-2xl dark:text-gray-700">
                  Digital Nomad Calculator — идеальное руководство для определения стран, открытых
                  для вашего следующего переезда. Удобное веб-приложение создано специально для
                  профессионалов, желающих сочетать работу и путешествия, предлагая список стран,
                  доступных для подачи заявления на визу/ВНЖ.
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>

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
