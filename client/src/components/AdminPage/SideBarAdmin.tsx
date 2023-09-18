import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBarAdmin(): React.JSX.Element {
  return (
    <div className="flex flex-col text-gray-800">
      <div className="fixed flex flex-col top-14 left-0 bg-none h-full w-[160px]">
        <div className="flex-grow">
          <ul className="flex flex-col py-6">
            <li>
              <Link
                to="/admin/users"
                className="relative flex flex-row items-center h-full focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <br />
                <span className="ml-2 text-sm tracking-wide truncate">
                  Входящие <br /> заявки и <br /> клиенты
                </span>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/admin"
                className="relative flex flex-row items-center h-full focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                {' '}
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Обновление <br />
                  данных для <br />
                  Digital Nomad <br />
                  Calculator{' '}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
