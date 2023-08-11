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
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            <br /> Перечень <span className="underline decoration-blue-500">Услуг</span>
          </h1>
          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                    {service.title}
                  </h1>
                  <span className="inline-block text-blue-500 dark:text-blue-400">
                    <span className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">Цена</span>
                    <br /> {service.price}
                  </span>

                  <p className="text-gray-500 dark:text-gray-300  border-t-2 border-indigo-500 pt-2 ">
                    {service.description}
                  </p>
                </div>
                <Button className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  Wtyf
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
