import { Button } from 'flowbite-react';
import React from 'react';

const services = [
  {
    title: 'Консультация и оценка соответствия',
    description:
      'Первоначальная встреча онлайн для определения ситуации, потребностей и соответствия клиента различным визам для «цифровых кочевников».',
    price: '100 – 250 EUR',
  },
  {
    title: 'Помощь в оформлении визы',
    description:
      'Помощь клиентам в заполнении и подаче заявлений на визу, обеспечение наличия и корректности всех необходимых документов.',
    price: '500 - 1500 EUR',
  },
  {
    title: 'Продление и расширение',
    description:
      'Помощь в продлении визы или её расширении, в зависимости от требований разных стран.',
    price: '300 - 800 EUR',
  },

  {
    title: 'Налоговая консультация',
    description: 'Советы по налоговым последствиям проживания и работы в другой стране.',
    price: '150 - 500 EUR за сессию',
  },
  {
    title: 'Интеграция и местные услуги',
    description:
      'Помощь цифровым кочевникам в поиске жилья, совместных рабочих пространств и понимании местных регламентов/особенностей.',
    price: '100 - 400 EUR',
  },
  {
    title: 'Чрезвычайная поддержка',
    description:
      'Поддержка в случае правовых проблем, отказов в визе или других чрезвычайных ситуаций в любой стране.',
    price: 'Зависит от конкретной ситуации',
  },
  {
    title: 'Постоянные обновления',
    description:
      'Информирование клиентов об изменениях в визовой политике или новых возможностях в разных странах.',
    price: '50 - 100 в месяц или включено в комплексный пакет',
  },
];

export default function ServicesCompanies() {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <section className="bg-white dark:bg-gray-900">
          <h1 className="text-2xl text-center font-semibold text-gray-800 lg:text-3xl dark:text-white">
            <br /> Перечень <span className="underline decoration-blue-500">услуг</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 xl:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 border-2 border-blue-400 dark:border-blue-300 rounded-xl max-w-sm mx-auto h-[449px] flex flex-col"
              >
                <div className="h-[357px] flex flex-col">
                  <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    {service.title}
                  </h1>
                  <span className="text-blue-500 dark:text-blue-400 mt-2 text-right">
                    <span className="text-gray-500 dark:text-gray-300">Цена</span>
                    <br /> {service.price}
                  </span>
                </div>
                <div className="h-[92px] overflow-hidden border-t-2 border-indigo-500 pt-2">
                  <p className="text-gray-500 dark:text-gray-300 ml-2 overflow-hidden">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
