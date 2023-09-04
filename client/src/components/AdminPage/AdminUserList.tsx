import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EyeIcon } from '@heroicons/react/20/solid';
import getUsers from '../../Redux/thunks/getUsers';
import editUser from '../../Redux/thunks/editUsersList';
import TestPage from './SideBarAdmin';
import nodemailerAdminSend from '../../Redux/thunks/nodemaileradmin';
import { useAppSelector } from '../../Redux/hooks';
import type { AppDispatch, IUser, RootState } from '../../Types/types';

function AdminUserList(): React.JSX.Element {
  const users = useSelector((state: RootState) => state.adminUserSlice.users);

  const dispatch: AppDispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);

  const [userStatusMap, setUserStatusMap] = useState<{ [id: number]: string }>({});
  const [searchText, setSearchText] = useState<string>('');

  const [showModal, setShowModal] = useState<boolean>(false);

  const [showNotification1, setShowNotification1] = useState<boolean>(false);
  const [showNotification2, setShowNotification2] = useState<boolean>(false);

  useAppSelector((state) => state.nodeSlice);

  const sendMesg = (user: IUser): void => {
    dispatch(nodemailerAdminSend(user) as never);
  };

  const initialState = {
    id: 0,
    login: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    subscribed: false,
    birthDate: '',
    phoneNumber: '',
    passport: '',
    balance: '',
    lease: '',
    citizenship: '',
    income: 0,
    work_exp: 0,
    work_date: '',
    document_status: '',
    appStatus: false,
    admin: false,
    visaType: '',
    visaTerm: 0,
    visaShare: '',
    createdAt: {},
    updatedAt: {},
  };

  const [modalForUser, setModalForUser] = useState<IUser>(initialState);

  const handleStatusChange1 = async (user: IUser): Promise<void> => {
    try {
      const newStatus = userStatusMap[user.id] || selectedStatus;
      await dispatch(editUser({ id: user.id, data: { document_status: newStatus } }));

      setUserStatusMap((prevState) => ({ ...prevState, [user.id]: newStatus }));

      sendMesg({ ...user, document_status: newStatus });
    } catch (error) {
      console.error('Ошибка при изменении статуса и отправке сообщения:', error);
    }
    setShowNotification2(true);
    setTimeout(() => {
      setShowNotification2(false);
    }, 3000);
  };

  const handleStatusChange2 = async (id: number): Promise<void> => {
    try {
      const newStatus = userStatusMap[id] || selectedStatus;
      await dispatch(editUser({ id, data: { document_status: newStatus } }));

      setUserStatusMap((prevState) => ({ ...prevState, [id]: newStatus }));
    } catch (error) {
      console.error('Ошибка при изменении статуса:', error);
    }
  };

  const handleStatusChange = async (id: number): Promise<void> => {
    try {
      const newStatus = userStatusMap[id] || selectedStatus;
      await dispatch(editUser({ id, data: { document_status: newStatus } }));

      setUserStatusMap((prevState) => ({ ...prevState, [id]: newStatus }));
    } catch (error) {
      console.error('Ошибка при изменении статуса:', error);
    }
    setShowNotification1(true);
    setTimeout(() => {
      setShowNotification1(false);
    }, 3000);
  };

  useEffect(() => {
    dispatch(getUsers() as never);
  }, [dispatch]);

  useEffect(() => {
    if (selectedStatus === '' && searchText === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) => {
        const fullName = `${user.first_name} ${user.last_name} ${user.middle_name}`;
        return (
          (selectedStatus === '' || user.document_status === selectedStatus) &&
          (searchText === '' || fullName.toLowerCase().includes(searchText.toLowerCase()))
        );
      });
      setFilteredUsers(filtered);
    }
  }, [selectedStatus, searchText, users]);

  const openModal = (user: IUser): void => {
    setModalForUser(user);
    setShowModal(true);
  };
  const closeModal = (): void => {
    setModalForUser(initialState);
    setShowModal(false);
  };

  return (
    <>
      <TestPage />
      <div className="py-8 px-20 mx-auto max-w-screen-xl lg:py-16 lg:px-10">
        {showNotification1 && (
          <div
            id="status"
            className="fixed top-16 left-1/2 animate-pulse transform -translate-x-1/2 w-300 bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
            style={{ transition: 'opacity 0.5s', opacity: showNotification1 ? 1 : 0 }}
          >
            Сохранено
          </div>
        )}
        {showNotification2 && (
          <div
            className="fixed top-10 left-1/2 transform -translate-x-1/2 w-300 bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
            style={{ transition: 'opacity 0.5s', opacity: showNotification2 ? 1 : 0 }}
          >
            Письмо отправлено и данные сохранены
          </div>
        )}
        <div className="flex justify-center mb-6">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => setSelectedStatus('')}
          >
            Все
          </button>
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-br from-pink-400 to-pink-600"
            onClick={() => setSelectedStatus('Новый пользователь')}
          >
            Новые пользователи
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => setSelectedStatus('Документы отправлены')}
          >
            Пользователь отправил документы
          </button>
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={() => setSelectedStatus('Получены документы')}
          >
            Получены документы
          </button>
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800"
            onClick={() => setSelectedStatus('Приняты в работу')}
          >
            Приняты в работу
          </button>
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
            onClick={() => setSelectedStatus('Требуют уточнения')}
          >
            Требуют уточнения
          </button>
          <button
            type="button"
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
            onClick={() => setSelectedStatus('Готово')}
          >
            Готово
          </button>
        </div>
        <input
          type="text"
          className="rounded-lg text-sm px-2 py-1.5 w-full mb-4"
          placeholder="Поиск по имени, фамилии или отчеству"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        {/* Модальное окно */}
        {showModal && (
          <div className="flex items-stretch overflow-auto">
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 sm:h-[full]  ">
              <div className="bg-white p-4 rounded-md w-[1000px] h-[850px]  ">
                <div className="px-4 sm:px-0 text-center ">
                  <h1 className="text-2xl font-bold leading-7 text-gray-900">Анкета</h1>
                </div>

                <div className="mr-6 ml-6 mt-4 border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    {' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">Имя</dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {modalForUser.first_name ? (
                            modalForUser.first_name
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                      </dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Отчество
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.middle_name ? (
                            modalForUser.middle_name
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                      </dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Фамилия
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.last_name ? (
                            modalForUser.last_name
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                      </dd>
                    </div>
                    {/*  */}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Дата рождения
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.birthDate ? (
                            modalForUser.birthDate
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Номер телефона
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.phoneNumber ? (
                            modalForUser.phoneNumber
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Email
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.email ? modalForUser.email : <div>Не заполненно</div>}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Гражданство
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.citizenship ? (
                            modalForUser.citizenship
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Чистый доход в €
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.income ? modalForUser.income : <div>Не заполненно</div>}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Виза или ВНЖ
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.visaType ? modalForUser.visaType : <div>Не заполненно</div>}
                        </div>
                      </dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Персональная или семейная виза
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.visaShare ? (
                            modalForUser.visaShare
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">
                        Примерная дата устройства на текущую работу
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.work_date ? (
                            modalForUser.work_date
                          ) : (
                            <div>Не заполненно</div>
                          )}
                        </div>
                        <div className="text-sm font-medium leading-6 text-gray-900 mt-2">
                          Месяцев на текущей работе:{' '}
                          {modalForUser.work_exp ? modalForUser.work_exp : <div>0</div>}
                        </div>
                      </dd>
                    </div>
                    <div className="m-2 pt-4 flex justify-center ">
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
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3">
          {filteredUsers.length ? (
            filteredUsers
              .filter((user) => user.login !== 'admin')
              .map((user) => (
                <section key={user.id} className="bg-white dark:bg-gray-900">
                  <div className="w-full h-[450px] overflow-auto">
                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl h-full flex flex-col">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        ФИО: {user.first_name} {user.last_name} {user.middle_name}
                      </h1>
                      <p className="text-gray-500 dark:text-gray-300">Email: {user.email}</p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Телефон: {user.phoneNumber}
                      </p>
                      <button
                        type="button"
                        className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                        onClick={() => openModal(user)}
                      >
                        Анкета
                      </button>
                      <div className="document-buttons">
                        {user.passport ? (
                          <div>
                            <button
                              type="button"
                              className="flex items-center "
                              onClick={() =>
                                window.open(`http://localhost:3000${user.passport}`, '_blank')
                              }
                            >
                              Паспорт
                              <EyeIcon
                                className="h-5 w-5 ml-2 text-[#76a1dd] cursor-pointer"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-500 dark:text-gray-300">Паспорт: нет</div>
                        )}

                        {user.balance ? (
                          <div>
                            <button
                              type="button"
                              className="flex items-center "
                              onClick={() =>
                                window.open(`http://localhost:3000${user.balance}`, '_blank')
                              }
                            >
                              Выписка из Банка
                              <EyeIcon
                                className="h-5 w-5 ml-2 text-[#76a1dd] cursor-pointer"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-500 dark:text-gray-300">
                            Выписка из Банка: нет
                          </div>
                        )}

                        {user.lease ? (
                          <div>
                            <button
                              type="button"
                              className="flex items-center "
                              onClick={() =>
                                window.open(`http://localhost:3000${user.lease}`, '_blank')
                              }
                            >
                              Справка о работе
                              <EyeIcon
                                className="h-5 w-5 ml-2 text-[#76a1dd] cursor-pointer"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="text-gray-500 dark:text-gray-300">
                            Справка о работе: нет
                          </div>
                        )}
                      </div>

                      <p className="btn btn-primary resume-btn  text-center">Статус документов</p>
                      <select
                        className="rounded-lg text-sm px-2 py-1.5 w-full"
                        value={userStatusMap[user.id] || user.document_status}
                        onChange={(event) => {
                          const { value } = event.target;
                          setUserStatusMap((prevState) => ({ ...prevState, [user.id]: value }));
                        }}
                      >
                        <option value="Новый пользователь">Новый пользователь</option>
                        <option value="Документы отправлены">
                          Пользователь отправил документы
                        </option>
                        <option value="Получены документы">Получены документы</option>
                        <option value="Приняты в работу">Приняты в работу</option>
                        <option value="Требуют уточнения">Требуют уточнения</option>
                        <option value="Готово">Готово</option>
                      </select>
                      <div className="mt-auto pt-5">
                        <button
                          type="button"
                          onClick={() => {
                            void handleStatusChange1(user);
                            void handleStatusChange2(user.id);
                          }}
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Отправить письмо
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStatusChange(user.id) as never}
                          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Сохранить
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ))
          ) : (
            <span>Нет пользователей</span>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminUserList;
