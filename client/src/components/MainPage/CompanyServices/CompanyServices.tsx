import React from 'react';

const CompanyServices = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold mt-4 mb-4">Наша команда</h1>
      <p className="mb-6">
        Мы объединили нашу выдающуюся арбитражную практику с многолетним опытом работы с нашими
        клиентами.{' '}
      </p>
      {/* First Card */}
      <div className="bg-white shadow-md w-full sm:w-4/5 md:w-96 mx-3 rounded-3xl flex flex-col sm:flex-row mb-8 overflow-hidden">
        <img
          className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
          src="/src/assets/Petr.jpg"
          alt="image"
        />
        <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
          <div className="flex flex-col justify-start items-baseline">
            <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">Петр Герчиков</h1>
            <span className="text-xs text-indigo-300 mt-0">KYC Consulting</span>
            {/* <p className="text-xs text-gray-500 w-4/5">
              «На первом месте для любых решений нашей компании стоит высокий этический уровень как
              по отношению к нашим клиентам, так и по отношению к партнерам»
            </p> */}
          </div>
          <p className="text-xs text-gray-500 w-4/5">Управляющий Партнер</p>
          {/* <div className="w-full flex justify-between items-center">
            <h1 className="font-bold text-gray-500">Какой-то текст</h1> 
            <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
              Add
            </button> 
          </div>*/}
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-100 w-full">
        {/* Second Card */}
        <div className="bg-white shadow-md h-96 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96">
          <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src="/src/assets/belkaniya.jpg"
            alt="image"
          />
          <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">Марк Белкания</h1>
              <span className="text-xs text-indigo-300 mt-0">KYC Consulting</span>
            </div>
            <p className="text-xs text-gray-500 w-4/5">Директор по развитию</p>
          </div>
        </div>

        <div className="bg-white shadow-md h-96 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96">
          <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src="/src/assets/belousova.jpg"
            alt="image"
          />
          <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                Надежда Белоусова
              </h1>
              <span className="text-xs text-indigo-300 mt-0">Litigation KYC Consulting</span>
            </div>
            <p className="text-xs text-gray-500 w-4/5">
              Адвокат <br /> Руководитель практики
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md h-96 mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96">
          <img
            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
            src="/src/assets/ustuzhanina.jpg"
            alt="image"
          />
          <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
            <div className="flex flex-col justify-start items-baseline">
              <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">Людмила Устюжина</h1>
              <span className="text-xs text-indigo-300 mt-0">WEALTH KYC Consulting</span>
            </div>
            <p className="text-xs text-gray-500 w-4/5">
              Адвокат <br /> Руководитель практики
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyServices;
