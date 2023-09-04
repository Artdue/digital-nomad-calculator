import React from 'react';

import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Calculator from '../Calculator/Calculator';
import Contact from '../../ContactAndFeed/Contact/Contact';
import Qualities from '../Qualities/Qualities';
import Motivation from '../Motivation/Motivation';
import type { IPropCalcScroll } from '../../../Types/propsType';



export default function Home({ calculator }: IPropCalcScroll): React.JSX.Element  {
  const calculateScroll = (): void=> {
    window.scrollTo(0, 700);
  };

  return (
    <div>
      <div className="bg-[#F4F8FD]  py-8 md:py-14 lg:py-20">
        <div className="mx-auto max-w-md lg:max-w-4xl md:max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#233862] sm:text-6xl">
              Digital Nomad Calculator
            </h1>
            <p className="mt-6 lg:text-lg md:text-lg text-sm max-w-md  lg:max-w-4xl md:max-w-3xl leading-8 text-gray-600">
              Легко и просто ориентируйтесь в мире виз для цифровых кочевников
            </p>
            <div className="mt-4 lg:mt-10 flex items-center justify-center gap-x-6 pl-5  lg:pl-0 md:pl-7">
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 md:py-8 lg:py-14">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <figure>
                <blockquote className="text-center font-light text-gray-500  lg:text-2xl dark:text-gray-700">
                  Digital Nomad Calculator — идеальное руководство для определения стран, открытых
                  для вашего следующего переезда. <br /> Удобное веб-приложение создано специально
                  для профессионалов, желающих сочетать работу и путешествия, предлагая список
                  стран, доступных для подачи заявления на визу/ВНЖ.
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Qualities />
      </div>
      <div className="bg-[#F4F8FD] py-14 " ref={calculator as never}>
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
