import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer } from 'flowbite-react';

export default function Foot(): React.JSX.Element {
  const navigate = useNavigate();

  const goToHome = (): void => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const aboutComp = (): void => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  const politPrivNav = (): void => {
    navigate('/path-to-privacy-policy');
    window.scrollTo(0, 0);
  };

  const feedbNav = (): void => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const servAndPriceNav = (): void => {
    navigate('/services-and-price');
    window.scrollTo(0, 0);
  };

  return (
    <Footer container className="bg-[#2A3030] rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="KYC Logo"
              href="https://kycconsulting.ru/"
              src="/src/assets/logo.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Меню" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" onClick={goToHome} className="text-white">
                  Главная
                </Footer.Link>
                <Footer.Link href="#" onClick={servAndPriceNav} className="text-white">
                  Услуги
                </Footer.Link>
                <Footer.Link href="#" onClick={aboutComp} className="text-white">
                  О компании
                </Footer.Link>{' '}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Информация" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" onClick={politPrivNav} className="text-white">
                  Политика
                  <br /> Конфиденциальности
                </Footer.Link>
                <Footer.Link href="#" onClick={feedbNav} className="text-white">
                  Записаться на консультацию
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Контакты" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:+74957951054" className="text-white">
                  +7 (495) 018 51 81
                </Footer.Link>
                <Footer.Link href="mailto:info@kycconsulting.ru" className="text-white">
                  info@kycconsulting.ru
                </Footer.Link>
                <Footer.Link href="https://yandex.ru/maps/-/CDQV6QnA" className="text-white">
                  «Рабочая станция» <br />
                  Садовническая набережная, 9<br />
                  Москва, 115035
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />

        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright
            by="Все права защищены
"
            year={2023}
          />
        </div>
      </div>
    </Footer>
  );
}
