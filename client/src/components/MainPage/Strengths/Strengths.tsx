import React from 'react';
import {
  ClockIcon,
  ShieldCheckIcon,
  ChatBubbleLeftIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Экспертный профессионализм',
    description:
      'Наши специалисты KYC Consulting and Legal Services - это искусные профессионалы,  способные оперативно разрешить даже самые сложные задачи. Все наши консультанты, юристы  и адвокаты имеют безукоризненные рекомендации и многолетний опыт работы на самом высоком  уровне.',
    icon: HandThumbUpIcon,
  },
  {
    name: 'Непрерывная поддержка',
    description:
      'Менеджеры всегда на связи с клиентами, обеспечивая максимальный уровень информирования. В любое время дня и ночи клиент может узнать о ходе ведения проекта. Личные консультации  доступны как в офисе, так и на нейтральной территории или территории клиента.',
    icon: ChatBubbleLeftIcon,
  },
  {
    name: 'Прозрачные цены',
    description:
      'Мы ценим ваше время и деньги. Поэтому стоимость наших услуг основывается на честной и ясной системе ценообразования. Мы используем часовой подход и фиксируем стоимость до начала работы. Это позволяет избежать неясностей и "накруток", таких как у других компаний.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Гарантированные сроки',
    description:
      ' Наше слово - залог успешного сотрудничества. Мы прописываем гарантированные сроки в наших соглашениях и несем ответственность за их соблюдение. Если мы не справимся вовремя, мы возвращаем вам средства. Мы стоим за каждый проект лично и готовы подтвердить это материально.',
    icon: ClockIcon,
  },
];

export default function Strengths() {
  return (
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
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
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
  );
}
