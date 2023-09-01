import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import logAdmin from '../../../Redux/thunks/logAdmin';
import type { ILogin, RootState } from '../../../Types/types';

const initState: ILogin = {
  email: '',
  password: '',
};

export default function LoginAdmin(): React.JSX.Element {
  const [loginAdmin, setLoginAdmin] = useState(initState);

  const mState = useAppSelector((state: RootState) => state.userSlice);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setLoginAdmin((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };
  const Handler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const actionResult = await dispatch(logAdmin(loginAdmin));
    if (actionResult.payload.msg === 'Вы успешно авторизованы!') {
      navigate('/admin/users');
    }
  };

  return (
    <div className="isolate bg-white px-4 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Войти</h2>
        <div>{mState.msg}</div>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 text-gray-900">Email</span>
            <div className="mt-2.5">
              <input
                onChange={inputHandler}
                value={loginAdmin.email}
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
                value={loginAdmin.password}
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
            type="button"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
