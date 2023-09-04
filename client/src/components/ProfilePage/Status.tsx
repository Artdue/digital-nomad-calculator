import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { profilePut } from '../../Redux/thunks/profileThunk';
import userNod from '../../Redux/thunks/userNod';
import type { IUser } from '../../Types/types';
import type { IEditUserInputs2 } from '../../Types/calcTypes';

export default function Status(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profileSlice);
  const userData: IUser = profile.profile;
  const statusS = useAppSelector((state) => state.profileSlice);
  const { loading } = statusS;

  const [showNotification1, setShowNotification1] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);

  const appHandler = (): void => {
    const editUser: IEditUserInputs2 = {
      id: userData.id,
      citizenship: userData.citizenship || '',
      income: userData.income || 0,
      work_exp: userData.work_exp || 0,
      work_date: userData.work_date || '',
      visaType: userData.visaType || '',
      visaShare: userData.visaShare || '',
      first_name: userData.first_name || '',
      second_name: userData.middle_name || '',
      last_name: userData.last_name || '',
      birthDate: userData.birthDate || '',
      phone: userData.phoneNumber || '',
      appStatus: false,
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

  const editHandler = (): void => {
    window.scrollTo(0, 0);
    setShowNotification1(true);
    setTimeout(() => {
      setShowNotification1(false);
    }, 3000);
    void dispatch(userNod(userData));
  };

  return (
    <>
      <div />
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
          {userData?.appStatus ? (
            <div>
              <button
                type="button"
                onClick={editHandler}
                className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-green-700 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
              >
                Обновить данные
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
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
