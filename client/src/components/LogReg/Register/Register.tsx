import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import userRegister from '../../../Redux/thunks/user/reg.api';
import RegGoogle from './RegGoogle';
import PrivacyPolicy from '../../PrivacyPolicy/PrivacyPolicy';
import type { ILogin } from '../../../Types/types';

const initState: ILogin = {
  email: '',
  password: '',
};
export default function Register(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const mstate = useAppSelector((state) => state.userSlice.msg);
  const [reg, setReg] = useState(initState);
  const navigate = useNavigate();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setReg((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const Handler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const actionResult = await dispatch(userRegister(reg));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (actionResult.payload.msg === 'Пользователь зарегистрирован') {
      navigate('/user/main');
    }
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => {
    setShowModal(true);
  };
  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <div className="isolate bg-white px-4 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Зарегистрироваться
        </h2>
        <div>{mstate}</div>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 text-gray-900">Email</span>
            <div className="mt-2.5">
              <input
                onChange={inputHandler}
                value={reg.email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 text-gray-900">Password</span>
            <div className="mt-2.5">
              <input
                onChange={inputHandler}
                value={reg.password}
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={(e) => Handler(e) as never}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2"
          >
            Зарегистрироваться
          </button>
          <p className="text-xs text-gray-500 uppercase text-center">
            * регистрируясь, вы принимаете условия{' '}
            <button
              type="button"
              className="underline text-xs uppercase dark:text-blue-400"
              onClick={() => openModal()}
            >
              Пользовательского соглашения
            </button>
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4" />
          <Link to="/user/login" className="text-xs text-gray-500 uppercase">
            или войдите в аккаунт
          </Link>
          <span className="border-b w-1/5 md:w-1/4" />
        </div>
        <RegGoogle />
      </form>

      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="w-[1000px] h-[900px] bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col items-center overflow-hidden">
            <div className="actions flex-grow overflow-y-auto">
              <PrivacyPolicy />
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
              style={{
                alignSelf: 'center',
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
