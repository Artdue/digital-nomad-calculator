import React from 'react';
import {
  ClockIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  FaceSmileIcon,
  LightBulbIcon,
  ArrowUturnUpIcon,
} from '@heroicons/react/24/outline';
import 'animate.css/animate.min.css'; // Подключение анимаций Tailwind CSS

const benefits = [
  {
    name: 'Упрощение',
    description:
      'Компания займётся всеми тонкостями, сводя стресс для клиента к минимуму и поможет увеличить вероятность успешного получения визы и/или ВНЖ.',
    icon: DocumentCheckIcon,
  },
  // {
  //   name: 'Повышение шансов на положительное решение',
  //   description: 'Профессиональная помощь может повысить вероятность получения визы и/или ВНЖ.',
  //   icon: ChartBarIcon,
  // },
  {
    name: 'Экономия на налогах',
    description:
      'Правильное налоговое планирование всегда приводит к экономии и предотвращает правовые проблемы.',
    icon: CheckCircleIcon,
  },
  //
  {
    name: 'Местные инсайты',
    description:
      'Получение информации о местных обычаях, правилах и регламентах, что необходимо для органичного переезда.',
    icon: LightBulbIcon,
  },
  {
    name: 'Спокойствие',
    description:
      'Поддержка в случае чрезвычайных обстоятельств или неожиданных сложностей – как страховка от форс-мажора.',
    icon: FaceSmileIcon,
  },
  {
    name: 'Экономия времени',
    description:
      'Клиент может сосредоточиться на своей работе или планировании путешествий, пока компания занимается миграционными вопросами.',
    icon: ClockIcon,
  },
  {
    name: 'Гибкость',
    description:
      'Имея подходящую визу, цифровые кочевники могут законно работать и проживать в стране, сочетая работу и отдых, и иметь возможность погрузиться в новую культуру.',
    icon: ArrowUturnUpIcon,
  },
];

// здесь есть всплытие при загрузке страницы

export default function Strengths() {
  return (
    <>
      <div className=" px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6">
        {/* <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6"> */}
        <div className="bg-white py-4 sm:py-10">
          {/* <div className="bg-white py-16 sm:py-20"> */}
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-400">
                Мы создаем комфортную обстановку для вас, позаботившись о каждой детали
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                За счет чего достигается комфорт в работе с KYC
              </p>
            </div>
            <div className="mx-auto mt-12 sm:mt-16 lg:mt-20">
              <dl className="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.name}
                    className={`relative pl-16 animate__animated animate__fadeInUp delay-${
                      index + 1
                    }`}
                  >
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                        <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {benefit.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {benefit.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="h-1 bg-gray-200 mx-auto mt-12 max-w-full" />
            <div className="mx-auto lg:text-center">
              <p className="mt-20 text-2xl leading-8 text-gray-600 font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Ваш успех - наш приоритет
                </span>
                <p className="mt-4 text-2xl leading-6 text-gray-600">
                  И наш подход позволит вам ощутить этот успех с минимальными усилиями
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
