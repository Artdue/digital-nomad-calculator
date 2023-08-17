import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addState } from '../../Redux/thunks/addStates';
import TestPage from './SideBarAdmin';

export default function NewState() {
  const formRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);


  const dispatch = useDispatch();
  const [stateName, setStateName] = useState<string>('');
  const [minIncome, setMinIncome] = useState<string>('');
  const [bannedCitizenship, setBannedCitizenship] = useState<string>('');
  const [workExp, setWorkExp] = useState<string>('');
  const [minAge, setMinAge] = useState<string>('');
  const [maxAge, setMaxAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [criminal, setCriminal] = useState<boolean>(false);
  const [visaType, setVisaType] = useState<string>('');
  const [visaTerm, setVisaTerm] = useState<string>('');
  const [visaShare, setVisaShare] = useState<string>('');
  const [actions, setActions] = useState<string>('');

  const handleAddState = async () => {
    const newState = {
      state_name: stateName,
      min_income: Number(minIncome),
      banned_citizenship: bannedCitizenship,
      work_exp: Number(workExp),
      min_age: Number(minAge),
      max_age: Number(maxAge),
      gender,
      criminal,
      visaType,
      visaTerm,
      visaShare,
      actions,
    };
    try {
      void dispatch(addState(newState));
      setShowNotification(true);
      setStateName('');
      setMinIncome('');
      setBannedCitizenship('');
      setWorkExp('');
      setMinAge('');
      setMaxAge('');
      setGender('');
      setCriminal(false);
      setVisaType('');
      setVisaTerm('');
      setVisaShare('');
      setActions('');
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const notificationTimeout = setTimeout(() => {
        setShowNotification(false); 
      }, 5000);
  
      return () => clearTimeout(notificationTimeout);
    }
  }, [showNotification]);
  

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <TestPage />
      <div className="flex justify-center mb-4">
  <button
    onClick={() => openModal()}
    type="button"
    className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  >
    Добавление данных в калькулятор
  </button>
</div>

{showNotification && (
  <div
    id="status"
    className="fixed top-16 left-1/2 animate-pulse transform -translate-x-1/2 w-300 z- bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
    style={{
      transition: 'opacity 0.5s',
      opacity: showNotification ? 1 : 0,
      zIndex: 9999, // Установите здесь нужное значение z-index
    }}  
  >
    Страна добавлена
  </div>
)}

      {showModal && (
        // <div
        //   className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 "
        //   style={{
        //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //   }}
        // >
        <div className="fixed inset-0  z-50 bg-black bg-opacity-50 sm:h-[full] overflow-auto">
          <div ref={formRef} className="p-4 w-full max-w-l mx-auto m-4 flex justify-center">
            <div className="px-4 sm:px-0 " />
            {/* <div className="mt-6 border-t border-gray-100  w-[700px] bg-white"> */}
            <div className=" bg-white p-4 rounded-md w-[1000px] h-[850px]  ">
              <div className="mr-6 ml-6 mt-4 mb-4 ">
                <form onSubmit={(e) => e.preventDefault()} className="divide-y divide-gray-100">
                  <div className="mr-6 ml-6 mt-4 ">
                    <dl>
                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Название государства
                        </dt>
                        <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <input
                            id="stateName"
                            type="text"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            value={stateName}
                            onChange={(e) => setStateName(e.target.value)}
                          />
                        </dd>
                      </div>

                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Гражданство с запретом на въезд
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <select
                            id="banned_citizenship"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={bannedCitizenship}
                            onChange={(e) => setBannedCitizenship(e.target.value)}
                          >
                            <option value="">Выберите </option>
                            <option value="RU">RU - гражданин РФ</option>
                            <option value="UKR">UKR - гражданин Украины</option>
                            <option value="KZ">KZ - гражданин Казахстана</option>
                            <option value="UZ">UZ - гражданин Узбекистана</option>
                            <option value="TJ">TJ - гражданин Таджикистана</option>
                            <option value="AZ">AZ - гражданин Азербайджана</option>
                            <option value="MD">MD - гражданин Молдавии</option>
                            <option value="BY">BY - гражданин Беларуси</option>
                            <option value="AM">AM - гражданин Армении</option>
                            <option value="KG">KG - гражданин Киргизии</option>
                            <option value="TM">TM - гражданин Туркменистана</option>
                          </select>
                        </dd>
                      </div>

                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Минимальный доход €
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <input
                            id="minIncome"
                            type="number"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            value={minIncome}
                            onChange={(e) => setMinIncome(e.target.value)}
                          />
                        </dd>
                      </div>
                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Опыт работы</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <input
                            id="workExp"
                            type="number"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            value={workExp}
                            onChange={(e) => setWorkExp(e.target.value)}
                          />
                        </dd>
                      </div>
                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Минимальный возраст
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <input
                            id="minAge"
                            type="number"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            value={minAge}
                            onChange={(e) => setMinAge(e.target.value)}
                          />
                        </dd>
                      </div>

                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Максимальный возраст
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <input
                            id="maxAge"
                            type="number"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={maxAge}
                            onChange={(e) => setMaxAge(e.target.value)}
                          />
                        </dd>
                      </div>
                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Виза/ВНЖ</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <select
                            id="visaType"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={visaType}
                            onChange={(e) => setVisaType(e.target.value)}
                          >
                            <option value="">Выберите тип визы</option>
                            <option value="ВНЖ">ВНЖ</option>
                            <option value="Виза">Виза</option>
                          </select>
                        </dd>
                      </div>
                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Максимальный срок визы
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <input
                            id="visaTerm"
                            type="number"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={visaTerm}
                            onChange={(e) => setVisaTerm(e.target.value)}
                          />
                        </dd>
                      </div>
                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Семейная/Персональная
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <select
                            id="visaShare"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={visaShare}
                            onChange={(e) => setVisaShare(e.target.value)}
                          >
                            <option value="">Выберите </option>
                            <option value="Персональная">Персональная</option>
                            <option value="Семейная">Семейная</option>
                          </select>
                        </dd>
                      </div>
                      <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-t border-gray-100">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Шаги для получения визы
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <textarea
                            id="actions"
                            // className="w-[640px] h-[200px] mt-1 text-sm text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none overflow-auto"
                            className="block w-full h-[200px] px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Действия"
                            // maxLength={5000}
                            value={actions}
                            onChange={(e) => setActions(e.target.value)}
                          />
                        </dd>
                      </div>
                      <div className="m-2 flex justify-center ">
                        <button
                          onClick={handleAddState}
                          onClick={closeModal}
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 "
                        >
                          Добавить
                        </button>
                        <button
                          onClick={closeModal}
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 "
                        >
                          Закрыть
                        </button>
                      </div>
                    </dl>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
