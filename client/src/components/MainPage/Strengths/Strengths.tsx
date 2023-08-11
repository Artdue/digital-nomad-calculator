import React from 'react';
import {
  ClockIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  FaceSmileIcon,
  LightBulbIcon,
  ChartBarIcon,
  ArrowUturnUpIcon,
} from '@heroicons/react/24/outline';
import 'animate.css/animate.min.css'; // Подключение анимаций Tailwind CSS

const features = [
  {
    name: 'Упрощение',
    description:
      'Оформление визы может быть сложным. Компания занимается всеми тонкостями, сводя стресс для клиента к минимуму.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Повышение шансов на положительное решение',
    description: 'Профессиональная помощь может повысить вероятность получения визы и/или ВНЖ.',
    icon: ChartBarIcon,
  },
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

const people = [
  {
    name: 'Упрощение',
    description:
      'Оформление визы может быть сложным. Компания занимается всеми тонкостями, сводя стресс для клиента к минимуму.',
  },
  {
    name: 'Повышение шансов на положительное решение',
    description: 'Профессиональная помощь может повысить вероятность получения визы и/или ВНЖ.',
  },
  {
    name: 'Экономия на налогах',
    description:
      'Правильное налоговое планирование всегда приводит к экономии и предотвращает правовые проблемы.',
  },
  {
    name: 'Местные инсайты',
    description:
      'Получение информации о местных обычаях, правилах и регламентах, что необходимо для органичного переезда.',
  },
  {
    name: 'Экономия времени',
    description:
      'Клиент может сосредоточиться на своей работе или планировании путешествий, пока компания занимается миграционными вопросами.',
  },
  {
    name: 'Спокойствие',
    description:
      'Поддержка в случае чрезвычайных обстоятельств или неожиданных сложностей – как страховка от форс-мажора.',
  },
  {
    name: 'Гибкость',
    description:
      'Имея подходящую визу, цифровые кочевники могут законно работать и проживать в стране, сочетая работу и отдых, и иметь возможность погрузиться в новую культуру.',
  },
];

// здесь есть всплытие при загрузке страницы :(

export default function Strengths() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              {' '}
              Мы создаем комфортную обстановку для вас, позаботившись о каждой детали
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              За счет чего достигается комфорт в работе с Комфорт в работе с KYC
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`relative pl-16 animate__animated animate__fadeInUp delay-${
                    index + 1
                  }`}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="h-1 bg-gray-200 mx-auto max-w-2xl mt-8" />

          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-6 text-lg leading-8 text-gray-600 font-bold">
              Ваш успех - наш приоритет, и наш подход позволит вам ощутить этот успех с минимальными
              усилиями
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
