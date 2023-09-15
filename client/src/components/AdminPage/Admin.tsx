import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Istate, RootState } from '../../Types/types';
import getAdmin from '../../Redux/thunks/getAdmin';
import deleteState from '../../Redux/thunks/deleteState';
import editState from '../../Redux/thunks/editState';
import NewState from './NewState';
import TestPage from './SideBarAdmin';

function AdminStates(): React.JSX.Element {
  const states = useSelector((state: RootState) => state.adminSlice.states);

  const [showNotification1, setShowNotification1] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);

  const dispatch = useDispatch();

  const deleteOneState = async (id: number): Promise<void> => {
    try {
      dispatch(deleteState(id) as never);
    } catch (error) {
      console.error('Ошибка при удалении данных:', error);
    }
    setShowNotification1(true);
    setTimeout(() => {
      setShowNotification1(false);
    }, 3000);
  };

  const [editingStateId, setEditingStateId] = useState<number | null>(null);
  const [editedFields, setEditedFields] = useState<Istate>({
    id: 0,
    state_name: '',
    min_income: 0,
    banned_citizenship: '',
    work_exp: 0,
    min_age: 0,
    max_age: 0,
    gender: '',
    criminal: false,
    visaType: '',
    visaTerm: 0,
    visaShare: '',
    actions: '',
    createdAt: {},
    updatedAt: {},
  });

  const handleEditState = async (): Promise<void> => {
    try {
      dispatch(editState(editedFields) as never);
      setEditingStateId(null);
      setEditedFields({
        id: 0,
        state_name: '',
        min_income: 0,
        banned_citizenship: '',
        work_exp: 0,
        min_age: 0,
        max_age: 0,
        gender: '',
        criminal: false,
        visaType: '',
        visaTerm: 0,
        visaShare: '',
        actions: '',
        createdAt: {},
        updatedAt: {},
      });
    } catch (error) {
      console.error('Ошибка при редактировании данных:', error);
    }
    setShowNotification2(true);
    setTimeout(() => {
      setShowNotification2(false);
    }, 3000);
  };

  useEffect(() => {
    dispatch(getAdmin() as never);
  }, [dispatch]);

  useEffect(() => {
    if (editingStateId !== null) {
      const editingState = states.find((state) => state.id === editingStateId);

      setEditedFields({
        id: editingState?.id || 0,
        state_name: editingState?.state_name || '',
        min_income: editingState?.min_income || 0,
        banned_citizenship: editingState?.banned_citizenship || '',
        work_exp: editingState?.work_exp || 0,
        min_age: editingState?.min_age || 0,
        max_age: editingState?.max_age || 0,
        gender: editingState?.gender || '',
        criminal: editingState?.criminal || false,
        visaType: editingState?.visaType || '',
        visaTerm: editingState?.visaTerm || 0,
        visaShare: editingState?.visaShare || '',
        actions: editingState?.actions || '',
        createdAt: editingState?.createdAt || {},
        updatedAt: editingState?.updatedAt || {},
      });
    } else {
      setEditedFields({
        id: 0,
        state_name: '',
        min_income: 0,
        banned_citizenship: '',
        work_exp: 0,
        min_age: 0,
        max_age: 0,
        gender: '',
        criminal: false,
        visaType: '',
        visaTerm: 0,
        visaShare: '',
        actions: '',
        createdAt: {},
        updatedAt: {},
      });
    }
  }, [editingStateId, states]);

  return (
    <>
      <TestPage />
      <div className="ml-10 sm:ml-0">
        {showNotification1 && (
          <div
            id="status"
            className="fixed top-16 left-1/2 animate-pulse transform -translate-x-1/2 w-300 bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
            style={{ transition: 'opacity 0.5s', opacity: showNotification1 ? 1 : 0 }}
          >
            Страна удалена
          </div>
        )}
        {showNotification2 && (
          <div
            className="fixed top-10 left-1/2 transform -translate-x-1/2 w-300 bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
            style={{ transition: 'opacity 0.5s', opacity: showNotification2 ? 1 : 0 }}
          >
            Данные актуализированы
          </div>
        )}
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-8">
          <br /> Добро пожаловать, Админ
        </h1>
        <NewState />
        <div className="grid justify-center">
          <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3">
            {states.map((state) => (
              <div key={state.id} className="flex items-stretch">
                {editingStateId === state.id ? (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 sm:h-[full] overflow-auto">
                    <div className="bg-white p-4 rounded-md w-[1000px] max-h-[90vh] overflow-y-auto">
                      <div className="px-4 sm:px-0 text-center">
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
                                value={editedFields.state_name}
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, state_name: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Минимальный доход €
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="number"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.min_income}
                                onChange={(e) =>
                                  setEditedFields({
                                    ...editedFields,
                                    min_income: Number(e.target.value),
                                  })
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
                                  setEditedFields({
                                    ...editedFields,
                                    work_exp: Number(e.target.value),
                                  })
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
                                  setEditedFields({
                                    ...editedFields,
                                    min_age: Number(e.target.value),
                                  })
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
                                  setEditedFields({
                                    ...editedFields,
                                    max_age: Number(e.target.value),
                                  })
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
                              Максимальный срок визы в годах
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <input
                                type="number"
                                className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={editedFields.visaTerm}
                                onChange={(e) =>
                                  setEditedFields({
                                    ...editedFields,
                                    visaTerm: Number(e.target.value),
                                  })
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
                          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Шаги для получения визы
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <textarea
                                className="block w-full h-[200px] px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={editedFields.actions}
                                placeholder="Действия"
                                onChange={(e) =>
                                  setEditedFields({ ...editedFields, actions: e.target.value })
                                }
                              />
                            </dd>
                          </div>
                          <div className="m-2 flex justify-center">
                            <button
                              type="button"
                              onClick={() => handleEditState() as never}
                              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6 "
                            >
                              Сохранить
                            </button>
                            <button
                              type="button"
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
                            onClick={() => deleteOneState(state.id) as never}
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
