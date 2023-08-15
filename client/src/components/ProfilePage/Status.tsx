import React, { useEffect, useState } from 'react';
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

  const appHandler = () => {
    const editUser = {
      id: userData.id,
      appStatus: true,
      document_status: 'Документы отправлены',
    };
    console.log(11111111);
    void dispatch(profilePut(editUser));
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
          {userData.appStatus ? (
            <div>
              <button className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2">
                Заявка отправлена
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
