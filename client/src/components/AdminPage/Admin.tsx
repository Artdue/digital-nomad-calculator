import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Types/types';
import { getAdmin } from '../../Redux/thunks/getAdmin';
import { addState } from '../../Redux/thunks/addStates';
import { deleteState } from '../../Redux/thunks/deleteState';
import { editState } from '../../Redux/thunks/editState';
import NewState from './NewState';
import TestPage from './TestPage';
// import './Admin.css';

function AdminStates(): React.JSX.Element {
  const [showForm, setShowForm] = useState(false);
  // const formRef = useRef(null);
  const states = useSelector((state: RootState) => state.adminSlice.states);

  const dispatch = useDispatch();

  const handleDeleteState = async (id: number) => {
    try {
      void dispatch(deleteState(id));
      void dispatch(getAdmin());
    } catch (error) {
      console.error('Ошибка при удалении данных:', error);
    }
  };

  const [editingStateId, setEditingStateId] = useState<number | null>(null);
  const [editedFields, setEditedFields] = useState({
    state_name: '',
    min_income: '',
    banned_citizenship: '',
    work_exp: '',
    min_age: '',
    max_age: '',
    gender: '',
    criminal: false,
    visaType: '',
    visaTerm: '',
    visaShare: '',
    actions: '',
  });

  const handleEditState = async (id: number) => {
    try {
      dispatch(editState({ id, data: editedFields }));
      setEditingStateId(null);
      setEditedFields({
        state_name: '',
        min_income: '',
        banned_citizenship: '',
        work_exp: '',
        min_age: '',
        max_age: '',
        gender: '',
        criminal: false,
        visaType: '',
        visaTerm: '',
        visaShare: '',
        actions: '',
      });
    } catch (error) {
      console.error('Ошибка при редактировании данных:', error);
    }
  };

  useEffect(() => {
    dispatch(getAdmin());
  }, []);

  useEffect(() => {
    if (editingStateId !== null) {
      // Найдите состояние, которое редактируется
      const editingState = states.find((state) => state.id === editingStateId);

      // Заполните состояние editedFields данными для предзаполнения
      setEditedFields({
        state_name: editingState.state_name,
        min_income: editingState.min_income.toString(),
        banned_citizenship: editingState.banned_citizenship,
        work_exp: editingState.work_exp.toString(),
        min_age: editingState.min_age.toString(),
        max_age: editingState.max_age.toString(),
        gender: editingState.gender,
        criminal: editingState.criminal,
        visaType: editingState.visaType,
        visaTerm: editingState.visaTerm,
        visaShare: editingState.visaShare,
        actions: editingState.actions,
      });
    } else {
      // Если не редактируется, сбросьте editedFields
      setEditedFields({
        state_name: '',
        min_income: '',
        banned_citizenship: '',
        work_exp: '',
        min_age: '',
        max_age: '',
        gender: '',
        criminal: false,
        visaType: '',
        visaTerm: '',
        visaShare: '',
        actions: '',
      });
    }
  }, [editingStateId, states]);

  return (
    <>
      <TestPage />
      <div className="ml-10 sm:ml-0">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-8">
          <br /> Добро пожаловать, Админ
        </h1>
        <NewState />
        <div className="grid justify-center">
          <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3">
            {states.map((state) => (
              <div key={state.id} className="flex items-stretch">
                {editingStateId === state.id ? (
                  // модалка
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 sm:h-[full] overflow-auto ">
                    <div className="bg-white p-4 rounded-md w-[1000px] h-[850px]  ">
                      <div className="px-4 sm:px-0 text-center ">
                        <h1 className="text-2xl font-bold leading-7 text-gray-900">
                          Редактирование государства
                        </h1>
                      </div>
                      <div className="mr-6 ml-6 mt-4 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                          {' '}
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Название государства
                            </dt>
                            <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="text"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                // value={firstName}
                                value={editedFields.state_name}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, state_name: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Минимальный доход
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="number"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.min_income}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, min_income: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Гражданство с запретом на въезд
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <select
                                id="banned_citizenship"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.banned_citizenship}
                                onChange={(e) =>
                                  setEditedFields({
                                    ...editedFields,
                                    banned_citizenship: e.target.value,
                                  })
                                }
                              >
                                {' '}
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
                                <option value="TM">TM - гражданин Туркменистана</option>{' '}
                              </select>
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Опыт работы
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="number"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.work_exp}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, work_exp: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Минимальный возраст
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="number"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.min_age}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, min_age: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Максимальный возраст
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="number"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.max_age}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, max_age: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Тип визы
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <select
                                id="visaType"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.visaType}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, visaType: e.target.value })
                                }
                              >
                                <option value="">Выберите тип визы</option>
                                <option value="ВНЖ">ВНЖ</option>
                                <option value="Виза">Виза</option>
                              </select>
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Максимальный срок визы
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="number"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.visaTerm}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, visaTerm: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Тип визы
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <select
                                id="visaShare"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.visaShare}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, visaShare: e.target.value })
                                }
                              >
                                <option value="">Выберите </option>
                                <option value="Персональная">Персональная</option>
                                <option value="Семейная">Семейная</option>
                              </select>
                            </dd>
                          </div>
                          {/* <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  className="hidden"
                                  checked={editedFields.criminal}
                                  onChange={(e) =>
                                    setEditedFields({ ...editedFields, criminal: e.target.checked })
                                  }
                                />
                                <span className="text-sm font-medium leading-6 text-gray-900">
                                  допустимость въезда с судимость
                                </span>

                                <span
                                  className={`w-5 h-5 rounded-md flex items-center justify-center ${
                                    editedFields.criminal
                                      ? 'bg-purple-600'
                                      : 'bg-white border border-gray-300'
                                  } border focus:ring focus:ring-purple-300 focus:outline-none`}
                                >
                                  {editedFields.criminal && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="white"
                                      className="w-3 h-3"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  )}
                                </span>
                              </label>
                            </dd>
                          </div> */}
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Шаги для получения визы
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <textarea
                                // className="w-[640px] h-[200px] mt-1 text-sm text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none overflow-auto"
                                className="block w-full h-[200px] px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={editedFields.actions}
                                placeholder="Действия"
                                //! почему-то ограничивает количество символов ~ до 3100б даже если maxLength={5000} или maxLength={10000}
                                // maxLength={5000}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, actions: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="m-2 flex justify-center">
                            <button
                              onClick={() => handleEditState(state.id)}
                              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 "
                            >
                              Сохранить
                            </button>
                            <button
                              onClick={() => setEditingStateId(null)}
                              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 "
                            >
                              Отмена
                            </button>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                ) : (
                  <section className="bg-white dark:bg-gray-900">
                    <div className="w-full">
                      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl h-full flex flex-col">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                          {state.state_name}
                        </h1>

                        <div className="mt-auto">
                          <button
                            type="button"
                            onClick={() => setEditingStateId(state.id)}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Редактировать
                          </button>

                          <button
                            type="button"
                            onClick={() => dispatch(deleteState(state.id))}
                            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminStates;
