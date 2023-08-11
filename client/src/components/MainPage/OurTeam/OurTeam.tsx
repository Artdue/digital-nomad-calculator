import React from 'react';
import { Card } from 'flowbite-react';

const OurTeam = () => {
  return (
    <div className="relative">
      <Card className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Noteworthy technology acquisitions 2021</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
            chronological order.
          </p>
        </p>
      </Card>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Наша команда
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Мы совместили наш впечатляющий опыт в области арбитражных дел и долголетней практикой
              работы с клиентами с нашим обширным опытом в сфере миграции. <br /> Наша команда
              готова предоставить вам индивидуальное руководство и сопровождение, необходимые для
              уверенного старта или продолжения вашего пути в мире цифровых перемен.
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/src/assets/gerchikov.jpg"
                  alt="Петр Герчиков"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <div>Петр Герчиков</div>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">KYC Consulting</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Управляющий Партнер
                </p>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  src="/src/assets/belkaniya.jpg"
                  alt="Марк Белкания"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <div>Марк Белкания</div>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">KYC Consulting</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Директор по развитию
                </p>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/src/assets/belousova.jpg"
                  alt="Надежда Белоусова"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <div>Надежда Белоусова</div>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Litigation KYC Consulting</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Адвокат <br /> Руководитель практики
                </p>
              </div>
            </div>

            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="/src/assets/ustuzhanina.jpg"
                  alt="Людмила Устюжина"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <div>Людмила Устюжина</div>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">WEALTH KYC Consulting</span>

                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Адвокат <br /> Руководитель практики
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
