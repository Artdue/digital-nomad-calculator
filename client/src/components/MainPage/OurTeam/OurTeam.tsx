import React from 'react';
import { Card } from 'flowbite-react';
const people = [
  {
    name: 'Петр Герчиков',
    role: 'Управляющий Партнер',
    position: 'KYC Consulting',
    imageUrl: '/src/assets/gerchikov.jpg',
  },
  {
    name: 'Марк Белкания',
    role: 'Директор по развитию',
    position: 'KYC Consulting',

    imageUrl: '/src/assets/belkaniya.jpg',
  },
  {
    name: 'Надежда Белоусова',
    role: 'Адвокат. Руководитель практики',
    position: 'Litigation KYC Consulting',

    imageUrl: '/src/assets/belousova.jpg',
  },
  {
    name: 'Людмила Устюжина',
    role: 'Адвокат. Руководитель практики',
    position: 'WEALTH KYC Consulting',
    imageUrl: '/src/assets/ustuzhanina.jpg',
  },
];

const OurTeam = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Наша Команда
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Мы совместили наш впечатляющий опыт в области арбитражных дел и долголетней практикой
              работы с клиентами с нашим обширным опытом в сфере миграции. <br /> <br /> Наша
              команда готова предоставить вам индивидуальное руководство и сопровождение,
              необходимые для уверенного старта или продолжения вашего пути в мире цифровых перемен.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-16"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 ">
                      {person.name}
                    </h3>

                    <p className="text-sm font-semibold leading-6 text-blue-500">
                      {person.position}
                    </p>
                    <span className="text-gray-500 dark:text-gray-400">{person.role}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
