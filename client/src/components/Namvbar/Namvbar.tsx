import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import userLogout from '../../Redux/thunks/user/logout.api';
import { Button } from '@material-tailwind/react';

import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  BriefcaseIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Главная', href: '/', current: false },
  // { name: 'Подбери свою страну', href: '/digitalNomadCalculator', current: false },
  { name: 'Услуги', href: '/services-and-price', current: false },
  // { name: 'Команда', href: '/CompanyServices', current: false },
  { name: 'О компании', href: '/about', current: false },
  { name: 'Контакты', href: '/contact', current: false },
  // { name: 'Войти', href: '#', current: false },
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

  const toLogin = () => {
    navigate('/user/login');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#0c4a6e] hover:bg-[#76a1dd]] hover:text-[#255fd4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4 sm:items-center">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-[#0c4a6e] text-[#76a1dd]'
                                : 'text-[#0c4a6e] hover:text-[#76a1dd]',
                              'px-4 py-2 text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  {user.email ? (
                    user.admin ? (
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
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
                                    'block px-4 py-2 text-sm text-[#0c4a6e] hover:text-[#76a1dd]',
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
                                    'w-full flex px-4 py-2 text-sm text-[#0c4a6e]  hover:text-[#76a1dd]',
                                  )}
                                >
                                  Выйти{' '}
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      // юзер
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-white text-sm  text-[#337CE5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>

                            <UserIcon className="h-6 w-6" aria-hidden="true" />
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
                                    'block px-4 py-2 text-sm text-[#0c4a6e]  hover:text-[#76a1dd]',
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
                                    'w-full flex px-4 py-2 text-sm text-[#0c4a6e]  hover:text-[#76a1dd]',
                                  )}
                                >
                                  Анкета
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={logout}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'w-full flex px-4 py-2 text-sm text-[#0c4a6e]  hover:text-[#76a1dd]',
                                  )}
                                >
                                  Выйти{' '}
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )
                  ) : (
                    <button
                      type="button"
                      onClick={toLogin}
                      className="relative rounded-full bg-[#255fd4] p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#255fd4]"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Вход</span>
                      <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  )}
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
      </Disclosure>{' '}
      <Outlet />
    </>
  );
}
