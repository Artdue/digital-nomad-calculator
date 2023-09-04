import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import PrivacyPolicy from '../../PrivacyPolicy/PrivacyPolicy';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import nodemailerSend from '../../../Redux/thunks/nodemailer';
import type { FormInputs } from '../../../Types/types';

const initState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function FeedbackForm(): React.JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputs, setInputs] = useState<FormInputs>(initState);

  const stateMess = useAppSelector((state) => state.nodeSlice);

  const dispatch = useAppDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const sendMesg = (): void => {
    void dispatch(nodemailerSend(inputs));
    setInputs(initState);
  };

  const openModal = (): void => {
    setShowModal(true);
  };
  const closeModal = (): void => {
    setShowModal(false);
  };
  return (
    <>
      {/* Сторона с инпутами */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
        <div className="text-center lg:mb-8 md:mb-4">
          <h1 className="text-[#337CE5] lg:text-lg md:text-sm text-sm font-medium">
            {stateMess.message}
          </h1>
        </div>
        <form className="mt-4">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={inputHandler}
              value={inputs.name}
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#337CE5] peer focus:text-[#337CE5]"
              placeholder=" "
              required
            />
            <span className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#337CE5] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Ваше имя
            </span>
          </div>

          {/* Email и телефон */}
          <div className="grid md:grid-cols-1">
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={inputs.email}
                onChange={inputHandler}
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#337CE5] peer focus:text-[#337CE5]"
                placeholder=" "
                required
              />
              <span className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#337CE5] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </span>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={inputHandler}
                value={inputs.phone}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#337CE5] peer focus:text-[#337CE5]"
                placeholder=" "
                required
              />
              <span className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#337CE5] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Телефон
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={inputHandler}
              value={inputs.message}
              type="text"
              maxLength={1000}
              name="message"
              id="floating_message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#337CE5] peer focus:text-[#337CE5]"
              placeholder=" "
              required
            />
            <span className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#337CE5] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Сообщение{' '}
            </span>
            <span className="text-gray-400 text-sm">До 1000 символов</span>
          </div>

          <span className="text-center block mb-4 text-xs text-gray-500 uppercase">
            Нажимая на кнопку, вы соглашаетесь на{' '}
            <button
              type="button"
              className="text-xs uppercase underline  text-gray-500"
              onClick={() => openModal()}
            >
              обработку персональных данных
            </button>
          </span>
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={sendMesg}
              variant="gradient"
              className="rounded-full bg-[#337CE5]  "
            >
              Отправить
            </Button>
          </div>
        </form>
        {showModal && (
          <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="w-[1000px] h-full bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col items-center overflow-hidden">
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
    </>
  );
}
