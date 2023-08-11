import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/thunks/getUsers';

function AdminUserList() {
  const users = useSelector((state) => state.adminUserSlice.users);
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(getUsers());
  }, []);
  
  return (
    <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3">
      {users.length ?(
  users.map((user) => (
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
            <div className="mt-auto">

              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Отправить письмо 
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Поменять статус
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  ))
      ):(<span>Нет Юзеров</span>)}
    </div>
  );
}

export default AdminUserList;
