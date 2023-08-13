import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import logAdmin from '../../../Redux/thunks/logAdmin';

type ILogin = {
  email: string;
  password: string;
};

const initState: ILogin = {
  email: '',
  password: '',
};

export default function LoginAdmin() {
  const [loginAdmin, setLoginAdmin] = useState(initState);

  const state = useAppSelector((state) => state.userSlice);
  console.log(state);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginAdmin((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };
  const Hendler = async (e: React.FormEvent) => {
    e.preventDefault();
    const actionResult = await dispatch(logAdmin(loginAdmin));
    // console.log(actionResult.payload);
    if (actionResult.payload.msg === 'Вы успешно авторизованы!') {
      navigate('/');
    } else {
      admin.msg;
    }
  };

  return (
    <div className="isolate bg-white px-4 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Войти</h2>
        <div>{state.msg}</div>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
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
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
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
            onClick={(e) => Hendler(e)}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}
