import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrivacyPolicy from '../../PrivacyPolicy/PrivacyPolicy';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import nodemailerSend from '../../../Redux/thunks/nodemailer';

const initState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function FeedbackForm() {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState(initState);

  const state = useAppSelector((state) => state.nodeSlice);
  console.log(state);

  const dispatch = useAppDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  const sendMesg = () => {
    // console.log('DISPATCHING');
    void dispatch(nodemailerSend(inputs));
    setInputs(initState);
  };

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {/* Сторона с инпутами */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center ">
          KYC поможет вам любом юридическом вопросе
        </h2>

        <span className="block mb-4">{state.message}</span>

        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={inputHandler}
              value={inputs.name}
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ваше имя
            </label>
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
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={inputHandler}
                value={inputs.phone}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Телефон
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={inputHandler}
              value={inputs.message}
              type="text"
              maxLength="1000"
              name="message"
              id="floating_message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Сообщение{' '}
            </label>
            <span className="text-gray-500 text-sm">До 1000 символов</span>
          </div>

          <span className="block mb-4">
            Нажимая на кнопку, вы соглашаетесь на{' '}
            <Link className="underline dark:text-blue-400" onClick={() => openModal()}>
              обработку персональных данных
            </Link>
          </span>
          <div className="text-center">
            <button
              onClick={sendMesg}
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Отправить
            </button>
          </div>
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
