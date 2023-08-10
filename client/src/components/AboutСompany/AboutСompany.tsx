import React from 'react';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  PuzzlePieceIcon,
  HandThumbUpIcon,
} from '@heroicons/react/20/solid';
import Contact from '../ContactAndFeed/Contact/Contact';

export default function AboutComponents() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  KYC Consulting and Legal services
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  О компании
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  В 2016 году была основана компания KYC Consulting and Legal services
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
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
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <HandThumbUpIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Гарантия качества и возврата средств.
                      </strong>{' '}
                      Мы стараемся решать проблемы клиента своевременно и качественно, работаем по
                      концепции Money Back Warranty (вернём деньги в случае нарушения оговоренных
                      сроков по нашей вине).
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Конфиденциальность на первом месте.
                      </strong>{' '}
                      Обязательно соблюдение принципа сохранности предоставленной доверителем
                      конфиденциальной информации (соглашения о неразглашении / NDA).
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <PuzzlePieceIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Индивидуальный подход.
                      </strong>{' '}
                      Не действуем по установленным шаблонам, у каждого клиента своя ситуация,
                      особенности ведения бизнеса и они требуется детального анализа конкретного
                      случая.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Наша миссия – в результате анализа найти и реализовать законный способ решения
                  юридической проблемы клиента. Подобный подход позволяет качественно и оперативно
                  выполнять поставленные задачи.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Остались вопросы?{' '}
                </h2>
                <p className="mt-6">
                  Запишитесь на консультацию, и мы поможем вам в поиске оптимального и рационального
                  решения вашей правовой проблемы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
