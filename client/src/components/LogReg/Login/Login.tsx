import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import userLogin from '../../../Redux/thunks/user/log.api';

type ILogin = {
  email: string;
  password: string;
};

const initState: ILogin = {
  email: '',
  password: '',
};
export default function Login() {
  const [login, setLogin] = useState(initState);
  const [err, setErr] = useState(false);
  const state = useAppSelector((state) => state.userSlice);
  console.log(state);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };
  const Hendler = async (e: React.FormEvent) => {
    e.preventDefault();
    const actionResult = await dispatch(userLogin(login));
    // console.log(actionResult.payload);
    if (actionResult.payload.msg === 'Вы успешно авторизованы!') {
      navigate('/');
    } else {
      state.msg;
    }
  };

  return (
    <div className="isolate bg-white px-4 sm:py-32 lg:px-8">
      {/* py-20 - это паддинги */}
      {/* это градиент заднего фона */}
      {/* <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
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
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
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
            onClick={(e) => Hendler(e)}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Войти
          </button>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4" />
          <a href="/user/login" className="text-xs text-gray-500 uppercase">
            или зарегистрируйтесь
          </a>
          <span className="border-b w-1/5 md:w-1/4" />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Войти через gmail
          </button>
        </div>
      </form>
    </div>
  );
}
