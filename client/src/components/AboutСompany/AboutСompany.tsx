import React from 'react';
import { LockClosedIcon, PuzzlePieceIcon, HandThumbUpIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import OurTeam from '../MainPage/OurTeam/OurTeam';

const features = [
  {
    name: 'Гарантия качества и возврата средств.',
    description:
      ' Мы стараемся решать проблемы клиента своевременно и качественно, работаем по концепции Money Back Warranty (вернём деньги в случае нарушения оговоренных сроков по нашей вине).',
    icon: HandThumbUpIcon,
  },
  {
    name: 'Конфиденциальность на первом месте.',
    description:
      ' Обязательно соблюдение принципа сохранности предоставленной доверителем конфиденциальной информации (соглашения о неразглашении / NDA).',
    icon: LockClosedIcon,
  },
  {
    name: 'Индивидуальный подход.',
    description:
      '  Не действуем по установленным шаблонам, у каждого клиента есть своя ситуация, требующая детального анализа в каждом конкретном случае.',
    icon: PuzzlePieceIcon,
  },
];

export default function AboutCompany(): React.JSX.Element {
  const navigate = useNavigate();

  const toContact = (): void => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 sm:py-20 lg:py-24 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 md:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 sm:mt-0">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-[#76a1dd]">
                  KYC Consulting and Legal services
                </p>
                <h1 className="text-[#233862] mt-2 text-3xl font-bold tracking-tigh sm:text-4xl">
                  О компании
                </h1>
                <p className="mt-6 text-lg md:text-xl lg:text-2xl leading-8 text-gray-700 sm:pb-6">
                  В 2016 году была основана компания KYC Consulting and Legal services
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:top-0 sm:pb-1 md:overflow-visible  sm:overflow-visible ">
            <img
              className="w-[48rem] lg:max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 "
              src="https://uploads-ssl.webflow.com/63d8af1349fdb34d6fab174e/642161a203b6c1c3a58f80f2_THE_COST_AND_THE_PRO.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  За это время мы успели собрать команду профессионалов с системным подходом к
                  праву, состоящую из юристов-практиков, адвокатов и консультантов разного профиля.
                  Большой опыт, комплексные кейсы и отличное портфолио позволяет профессионально
                  решать правовые задачи любой сложности в короткие сроки.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-[#76a1dd]"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-8">
                  Наша миссия – в результате анализа найти и реализовать законный способ решения
                  юридической проблемы клиента. Подобный подход позволяет качественно и оперативно
                  выполнять поставленные задачи.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Остались вопросы?{' '}
                </h2>
                <p className="mt-6">
                  <button
                    type="button"
                    onClick={toContact}
                    className="text-base font-semibold leading-7 text-[#76a1dd]"
                  >
                    {' '}
                    Запишитесь на консультацию
                  </button>
                  , и мы поможем вам в поиске оптимального и рационального решения вашей правовой
                  проблемы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
    </>
  );
}
