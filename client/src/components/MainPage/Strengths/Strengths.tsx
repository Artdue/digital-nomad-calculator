import React from 'react';
import {
  ClockIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  FaceSmileIcon,
  LightBulbIcon,
  ArrowUturnUpIcon,
} from '@heroicons/react/24/outline';
import 'animate.css/animate.min.css';

const benefits = [
  {
    name: 'Упрощение',
    description:
      'Компания займётся всеми тонкостями, сводя стресс для клиента к минимуму и поможет увеличить вероятность успешного получения визы и/или ВНЖ.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Экономия на налогах',
    description:
      'Правильное налоговое планирование всегда приводит к экономии и предотвращает правовые проблемы.',
    icon: CheckCircleIcon,
  },
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

export default function Strengths(): React.JSX.Element {
  return (
    <div className=" px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6">
      <div className="mx-auto px-6 py-8 lg:py-14 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-center  font-semibold leading-7 lg:text-base md:text-sm sm:text-xs text-[#76a1dd]">
            Мы создаем комфортную обстановку для вас, позаботившись о каждой детали
          </h2>
          <h1 className="text-center text-[#233862] mt-2  md:text-2xl font-medium tracking-tight text-base sm:text-2xl lg:text-3xl">
            За счет чего достигается комфорт в работе с KYC
          </h1>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20">
          <dl className="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.name}
                className={`relative pl-16 animate__animated animate__fadeInUp delay-${index + 1}`}
              >
                <dt className="text-base font-semibold leading-7 text-[#233862]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-300">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
