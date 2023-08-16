import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { profilePut } from '../../Redux/thunks/profileThunk';
import userNod from '../../Redux/thunks/userNod';

export default function Status(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;
  // console.log('userData', userData);
  const statusS = useAppSelector((state) => state.profileSlice);
  const { loading } = statusS;

  const [showNotification1, setShowNotification1] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);

  const appHandler = () => {
    const editUser = {
      id: userData.id,
      appStatus: true,
      document_status: 'Документы отправлены',
    };
    setShowNotification2(true);
    void dispatch(profilePut(editUser));
    window.scrollTo(0, 0);
    setTimeout(() => {
      setShowNotification2(false);
    }, 3000);
    void dispatch(userNod(userData));
  };

  const editHandler = () => {
    window.scrollTo(0, 0);
    setShowNotification1(true);
    setTimeout(() => {
      setShowNotification1(false);
    }, 3000);
    // void dispatch(profilePut(editUser));
    void dispatch(userNod(userData));
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <img src="/src/assets/reload-cat.gif" alt="" />
        </div>
      ) : (
        <div className="m-2 flex justify-center items-center flex-col">
          {showNotification1 && (
            <div
              id="status"
              className="fixed top-16 left-1/2 animate-pulse transform -translate-x-1/2 w-300 bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
              style={{ transition: 'opacity 0.5s', opacity: showNotification1 ? 1 : 0 }}
            >
              Данные актуализированы
            </div>
          )}
          {showNotification2 && (
            <div
              className="fixed top-10 left-1/2 transform -translate-x-1/2 w-300 bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
              style={{ transition: 'opacity 0.5s', opacity: showNotification2 ? 1 : 0 }}
            >
              Заявка отправлена
            </div>
          )}
          {userData.appStatus ? (
            <div>
              <button
                onClick={editHandler}
                className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-green-700 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
              >
                Обновить данные
              </button>
            </div>
          ) : (
            <div>
              <button
                className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                onClick={appHandler}
              >
                Отправить заявку на консультацию
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
