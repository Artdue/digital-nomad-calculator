import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import addState from '../../Redux/thunks/addStates';
import type { InewState } from '../../Types/types';

export default function NewState(): React.JSX.Element {
  const formRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();

  const [stateName, setStateName] = useState<string>('');
  const [minIncome, setMinIncome] = useState<number>(0);
  const [bannedCitizenship, setBannedCitizenship] = useState<string>('');
  const [workExp, setWorkExp] = useState<string>('');
  const [minAge, setMinAge] = useState<number>(0);
  const [maxAge, setMaxAge] = useState<number>(0);
  const [gender, setGender] = useState<string>('');
  const [criminal, setCriminal] = useState<boolean>(false);
  const [visaType, setVisaType] = useState<string>('');
  const [visaTerm, setVisaTerm] = useState<number>(0);
  const [visaShare, setVisaShare] = useState<string>('');
  const [actions, setActions] = useState<string>('');

  const handleAddState = async (): Promise<void> => {
    const InewState: InewState = {
      state_name: String(stateName),
      min_income: Number(minIncome),
      banned_citizenship: String(bannedCitizenship),
      work_exp: Number(workExp),
      min_age: Number(minAge),
      max_age: Number(maxAge),
      gender: String(gender),
      criminal: Boolean(criminal),
      visaTerm: Number(visaTerm),
      visaShare: String(gender),
      actions: String(actions),
    };

    try {
      void dispatch(addState(InewState) as never);
      setShowNotification(true);
      setStateName('');
      setMinIncome(0);
      setBannedCitizenship('');
      setWorkExp('');
      setMinAge(0);
      setMaxAge(0);
      setGender('');
      setCriminal(false);
      setVisaType('');
      setVisaTerm(0);
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

  const openModal = (): void => {
    setShowModal(true);
  };
  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
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
            zIndex: 9999,
          }}
        >
          Страна добавлена
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0  z-50 bg-black bg-opacity-50 sm:h-[full] overflow-auto">
          <div ref={formRef} className="p-4 w-full max-w-l mx-auto m-4 flex justify-center">
            <div className="px-4 sm:px-0 " />
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
                            onChange={(e) => setMinIncome(Number(e.target.value))}
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
                            onChange={(e) => setMinAge(Number(e.target.value))}
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
                            onChange={(e) => setMaxAge(Number(e.target.value))}
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
                          Максимальный срок визы в годах
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <input
                            id="visaTerm"
                            type="number"
                            className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={visaTerm}
                            onChange={(e) => setVisaTerm(Number(e.target.value))}
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
                            className="block w-full h-[200px] px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Действия"
                            value={actions}
                            onChange={(e) => setActions(e.target.value)}
                          />
                        </dd>
                      </div>
                      <div className="m-2 flex justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            void handleAddState();
                            closeModal();
                          }}
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6"
                        >
                          Добавить
                        </button>
                        <button
                          type="button"
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
