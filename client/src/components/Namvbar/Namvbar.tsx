import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import userLogout from '../../Redux/thunks/user/logout.api';
import { Button } from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Главная', href: '/', current: false },
  // { name: 'Подбери свою страну', href: '/digitalNomadCalculator', current: false },
  { name: 'Услуги', href: '/services-and-price', current: false },
  { name: 'Наша команда', href: '/CompanyServices', current: false },
  { name: 'О компании', href: '/about', current: false },
  { name: 'Контакты', href: '/contact', current: false },
];

const navigationT = [
  { name: 'Войти', href: '/user/login', current: false },
  // { name: 'Зарегистрироваться', href: '/user/register', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Namvbar({ scrollToBlock }) {
  // const user = useAppSelector((state) => state.adminUserSlice);
  const user = useAppSelector((state) => state.userSlice);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    void dispatch(userLogout());
    navigate('/');
  };

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-grow items-center justify-center sm:justify-start">
                  <Button
                    type="submit"
                    onClick={scrollToBlock}
                    variant="gradient"
                    className="rounded-full bg-gradient-to-br from-[#337CE5] to-[#255fd4] font-semibold text-white ml-2 md:ml-0"
                  >
                    Digital Nomad Calculator
                  </Button>
                  <div className="hidden md:flex md:flex-grow justify-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>{' '}
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">Войти</div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2  lg:px-8 md:pt-5 lg:pt-0">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#162E3C] hover:bg-[#76a1dd]] hover:text-[#76a1dd] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* <button
                  onClick={scrollToBlock}
                  className=" px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center md:text-[10px] md:p-1 md:w-[80px] lg:w-[200px] lg:h-[40px] lg:m-2 hidden md:block lg:text-base"
                >
                  Digital Nomad Calculator
                </button> */}
                <Button
                  type="submit"
                  onClick={scrollToBlock}
                  variant="gradient"
                  className="rounded-full bg-gradient-to-br from-[#337CE5] to-[#255fd4] font-semibold text-white "
                >
                  Digital Nomad Calculator
                </Button>
                {/* это меню текст */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center ">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 sm:items-center">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-[#0c4a6e] text-[#76a1dd] md:text-[10px] '
                              : ' text-[#0c4a6e] hover:text-[#76a1dd] md:text-[10px] ',
                            'rounded-md px-3 py-2 lg:text-base font-medium md:text-[10px] md:text-center',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {user.email ? (
                  user.admin ? (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <div className="flex flex-wrap gap-2">
                              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-black">
                                {user.email.slice(0, 2).toUpperCase()}
                              </div>
                            </div>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/admin/users"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-base text-[#0c4a6e] hover:text-[#76a1dd]',
                                  )}
                                >
                                  Кабинет администратора
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={logout}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'w-full flex px-4 py-2 text-base text-[#0c4a6e]  hover:text-[#76a1dd]',
                                  )}
                                >
                                  Выйти из профиля
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  ) : (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-[#c8ddfb] text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#c8ddfb]">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <div className="flex flex-wrap gap-2">
                              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-black">
                                {user.email.slice(0, 2).toUpperCase()}
                              </div>
                            </div>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/user/main"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-base text-[#0c4a6e]  hover:text-[#76a1dd]',
                                  )}
                                >
                                  Digital Nomad Calculator
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/user/profile"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    ' block px-4 py-2 text-base text-[#0c4a6e]  hover:text-[#76a1dd]',
                                  )}
                                >
                                  Консультация
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={logout}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'w-full flex px-4 py-2 text-base text-[#0c4a6e]  hover:text-[#76a1dd]',
                                  )}
                                >
                                  Выйти
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  )
                ) : (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:flex-col">
                    <div className="flex space-x-4">
                      {navigationT.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-[#0c4a6e] text-[#76a1dd]'
                              : ' text-[#0c4a6e] hover:text-[#76a1dd]',
                            'block  px-3 py-2 lg:text-base font-medium md:text-[10px]',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 flex-col">
                {navigation.map((item) => (
                  <Disclosure.Button>
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-[#0c4a6e] text-[#76a1dd]'
                          : ' text-[#0c4a6e] hover:text-[#76a1dd]',
                        'block  px-3 py-2 text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </>
  );
}
