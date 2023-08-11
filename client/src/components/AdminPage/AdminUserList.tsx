import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/thunks/getUsers';
import { editUser } from '../../Redux/thunks/editUsersList';

function AdminUserList() {
  const users = useSelector((state) => state.adminUserSlice.users);

  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  
  const [userStatusMap, setUserStatusMap] = useState({});
  const [searchText, setSearchText] = useState('');
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

  return (
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
                    <p className="text-gray-500 dark:text-gray-300">Паспорт: {user.passport}</p>
                    <p className="text-gray-500 dark:text-gray-300">Выписка из Банка: {user.balance}</p>
                    <p className="text-gray-500 dark:text-gray-300">Bыписка c работы: {user.balance}</p>
                    <p className="text-gray-500 dark:text-gray-300">Телефон: {user.phoneNumber}</p>
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
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))
        ) : (
          <span>Нет Юзеров</span>
        )}
      </div>
    </div>
  );
}

export default AdminUserList;
