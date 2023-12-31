import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import userLogin from '../../../Redux/thunks/user/log.api';
import RegGoogle from '../Register/RegGoogle';
import type { ILogin, RootState } from '../../../Types/types';

const initState: ILogin = {
  email: '',
  password: '',
};

export default function Login(): React.JSX.Element {
  const [login, setLogin] = useState(initState);

  const mstate = useAppSelector((state: RootState) => state.userSlice);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const Handler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await dispatch(userLogin(login));
    if (mstate.msg === 'Вы успешно авторизованы!') {
      navigate('/user/main');
    }
  };

  return (
    <div className="isolate bg-white px-4 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Войти</h2>
        <div>{mstate.msg}</div>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className="block text-sm font-semibold leading-6 text-gray-900">Email</span>
            <div className="mt-2.5">
              <input
                onChange={inputHandler}
                value={login.email}
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
                value={login.password}
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
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Войти
          </button>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4" />
          <Link to="/user/register" className="text-xs text-gray-500 uppercase">
            или зарегистрируйтесь
          </Link>
          <span className="border-b w-1/5 md:w-1/4" />
        </div>
        <RegGoogle />
      </form>
    </div>
  );
}
