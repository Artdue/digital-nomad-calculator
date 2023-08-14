import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/thunks/getUsers';
import { editUser } from '../../Redux/thunks/editUsersList';
import TestPage from './TestPage';

function AdminUserList() {
  const users = useSelector((state) => state.adminUserSlice.users);
  console.log(users);

  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const [userStatusMap, setUserStatusMap] = useState({});
  const [searchText, setSearchText] = useState('');

  const [oneState, setOneState] = useState();
  const [showModal, setShowModal] = useState(false);
  console.log('🚀 ', showModal);

  const [modalForUser, setModalForUser] = useState(''); // пока не важно
  console.log('🚀 ~ file: AdminUserList.tsx:23 ~ AdminUserList ~ modalForUser:', modalForUser);

  const handleStatusChange = async (id) => {
    try {
      const newStatus = userStatusMap[id] || selectedStatus;
      await dispatch(editUser({ id, data: { document_status: newStatus } }));
      setUserStatusMap((prevState) => ({ ...prevState, [id]: newStatus }));
    } catch (error) {
      console.error('Ошибка при изменении статуса:', error);
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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

  const openModal = (user) => {
    setModalForUser(user);
    setShowModal(true);
  };
  const closeModal = () => {
    setModalForUser([]);
    setShowModal(false);
  };

  return (
    <>
      <TestPage />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex justify-center mb-6">
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
          // модалка
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
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">Отчество</dt>
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
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">Фамилия</dt>
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
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">Дата рождения</dt>
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
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">Email</dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.email ? modalForUser.email : <div>Не заполненно</div>}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">Гражданство</dt>
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
                        Чистый доход в $
                      </dt>
                      <dd className=" text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {' '}
                          {modalForUser.income ? modalForUser.income : <div>Не заполненно</div>}
                        </div>
                      </dd>
                    </div>{' '}
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900 mt-[9px]">Виза или ВНЖ</dt>
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
                    {/* кнопка */}
                    <div className="m-2 pt-4 flex justify-center ">
                      <button
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
            filteredUsers.map((user) => (
              <div key={user.id} className="flex items-stretch">
                <section className="bg-white dark:bg-gray-900">
                  <div className="w-full">
                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl h-full flex flex-col">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        {user.first_name} {user.last_name} {user.middle_name}
                      </h1>
                      <p className="text-gray-500 dark:text-gray-300">Email: {user.email}</p>
                      <button
                        type="button"
                        className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                        onClick={() => openModal(user)}
                      >
                        Анкета
                      </button>
                      {/* <p className="text-gray-500 dark:text-gray-300">Паспорт: {user.passport}</p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Выписка из Банка: {user.balance}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Bыписка c работы: {user.balance}
                      </p> */}
                      {/* <button className="btn btn-primary resume-btn" onClick={() => window.open(`http://localhost:3000${user.passport}`, '_blank')}>Паспорт</button>
                      <button className="btn btn-primary resume-btn" onClick={() => window.open(`http://localhost:3000${user.balance}`, '_blank')}>Выписка из Банка</button>
                      <button className="btn btn-primary resume-btn" onClick={() => window.open(`http://localhost:3000${user.lease}`, '_blank')}>Справка о работе</button>  */}
                      <div className="document-buttons">
                        {user.passport ? (
                          <div>
                            <button
                              className="btn btn-primary resume-btn"
                              onClick={() =>
                                window.open(`http://localhost:3000${user.passport}`, '_blank')
                              }
                            >
                              Паспорт
                            </button>
                            <br />
                          </div>
                        ) : (
                          <div className="text-gray-500 dark:text-gray-300">Паспорт: нет</div>
                        )}

                        {user.balance ? (
                          <div>
                            <button
                              className="btn btn-primary resume-btn"
                              onClick={() =>
                                window.open(`http://localhost:3000${user.balance}`, '_blank')
                              }
                            >
                              Выписка из Банка
                            </button>
                            <br />
                          </div>
                        ) : (
                          <div className="text-gray-500 dark:text-gray-300">
                            Выписка из Банка: нет
                          </div>
                        )}

                        {user.lease ? (
                          <div>
                            <button
                              className="btn btn-primary resume-btn"
                              onClick={() =>
                                window.open(`http://localhost:3000${user.lease}`, '_blank')
                              }
                            >
                              Справка о работе
                            </button>
                            <br />
                          </div>
                        ) : (
                          <div className="text-gray-500 dark:text-gray-300">
                            Справка о работе: нет
                          </div>
                        )}
                      </div>

                      <p className="text-gray-500 dark:text-gray-300">
                        Телефон: {user.phoneNumber}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300">Документы:</p>
                      <select
                        className="rounded-lg text-sm px-2 py-1.5 w-full"
                        value={userStatusMap[user.id] || user.document_status}
                        onChange={(event) => {
                          const { value } = event.target;
                          setUserStatusMap((prevState) => ({ ...prevState, [user.id]: value }));
                        }}
                      >
                        <option value={null}>Новый пользователь</option>
                        <option value="Получены документы">Получены документы</option>
                        <option value="Приняты в работу">Приняты в работу</option>
                        <option value="Требуют уточнения">Требуют уточнения</option>
                        <option value="Готово">Готово</option>
                      </select>
                      <div className="mt-auto">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Отправить письмо
                        </button>
                        <button
                          onClick={() => handleStatusChange(user.id)}
                          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Сохранить
                        </button>
                        {/* <button
                        type="button"
                        className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                        onClick={() => openModal(user)}
                      >
                        Анкета Подробнее
                      </button> */}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))
          ) : (
            <span>Нет Юзеров</span>
          )}
        </div>{' '}
      </div>
    </>
  );
}

export default AdminUserList;
