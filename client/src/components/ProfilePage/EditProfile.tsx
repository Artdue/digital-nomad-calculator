import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { profileGet, profilePut } from '../../Redux/thunks/profileThunk';
import Profile from './Profile';

export default function EditProfile(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.profileSlice);
  const status = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;
  const { loading } = status;

  const [firstName, setFirstName] = useState(userData?.first_name || '');
  const [middleName, setMiddleName] = useState(userData?.middle_name || '');
  const [lastName, setLastName] = useState(userData?.last_name || '');
  //   const [email, setEmail] = useState('super-Multer@was-born-on-Phiket.th');
  const [citizenship, setCitizenship] = useState(userData?.citizenship || '');
  const [income, setIncome] = useState(userData?.income || '');
  const [employmentDate, setEmploymentDate] = useState(userData?.work_date || '');
  const [workExp, setworkExp] = useState(userData?.work_exp || '');
  const [phone, setPhone] = useState(userData?.phoneNumber || '');
  const [birthDate, setbirthDate] = useState(userData?.birthDate || '');
  const [visaType, setvisaType] = useState(userData?.visaType || '');
  const [visaShare, setvisaShare] = useState(userData?.visaShare || '');

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    window.scrollTo(0, 0);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setFirstName(firstName);
    setMiddleName(middleName);
    setLastName(lastName);
    // setEmail(email);
    setCitizenship(citizenship);
    setIncome(income);
    setEmploymentDate(employmentDate);
    const currentDate = new Date();
    const [year, month, day] = employmentDate.split('-').map(Number);
    const targetDate = new Date(year, month - 1, day);
    const timeDiff = currentDate - targetDate;
    const monthsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
    setworkExp(monthsPassed);
    setPhone(phone);
    setbirthDate(birthDate);
    console.log(
      firstName,
      middleName,
      lastName,
      citizenship,
      income,
      employmentDate,
      JSON.stringify(monthsPassed),
      phone,
      birthDate,
    );
    const editUser = {
      id: userData.id,
      first_name: firstName,
      second_name: middleName,
      last_name: lastName,
      birthDate,
      phone,
      citizenship,
      income,
      work_exp: monthsPassed,
      work_date: employmentDate,
      visaType,
      visaShare,
    };
    console.log(editUser);
    void dispatch(profilePut(editUser));
    // void dispatch(profileGet(user));
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <img src="/src/assets/reload-cat.gif" alt="" />
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <div className="container mx-auto mt-8 p-8 max-w-4xl flex justify-center items-center flex flex-col block rounded-lg bg-white p-6 shadow-md dark:bg-neutral-700">
            <div className="px-4 sm:px-0">
              <h1 className="text-2xl font-bold leading-7 text-gray-900">
                Анкета для получения консультации
              </h1>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Заполните, пожалуйста, как можно больше полей для более эффективной консультации
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Имя</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="firstName"
                      className="w-full py-1 px-2 border rounded-md"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Отчество</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="w-full py-1 px-2 border rounded-md"
                      name="middleName"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Фамилия</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="w-full py-1 px-2 border rounded-md"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Дата устройства на текущую работу
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="date"
                      className="w-full py-1 px-2 border rounded-md"
                      name="birthDate"
                      value={birthDate}
                      onChange={(e) => setbirthDate(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Номер телефона</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="phone"
                      className="w-full py-1 px-2 border rounded-md"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </dd>
                </div>
                {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Электронная почта</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="w-full py-1 px-2 border rounded-md"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </dd>
                </div> */}
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Гражданство</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="w-full py-1 px-2 border rounded-md"
                      name="citizenship"
                      value={citizenship}
                      onChange={(e) => setCitizenship(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Чистый доход</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="w-full py-1 px-2 border rounded-md"
                      name="income"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Виза или ВНЖ</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <select
                      name="visaT"
                      id="visaT"
                      className="block w-full rounded-md border border-black-300 py-1.5  pr-20 text-gray-900  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setvisaType(e.target.value)}
                    >
                      <option value={visaType}>{visaType}</option>
                      <option value="ВНЖ">ВНЖ</option>
                      <option value="Виза">Виза</option>
                    </select>
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Персональная или семейная виза
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <select
                      name="visaT"
                      id="visaT"
                      className="block w-full rounded-md border border-black-300 py-1.5  pr-20 text-gray-900  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setvisaShare(e.target.value)}
                    >
                      <option value={visaShare}>{visaShare}</option>
                      <option value="Персональная">Персональная</option>
                      <option value="Семейная">Семейная</option>
                    </select>
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Дата устройства на текущую работу
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="date"
                      className="w-full py-1 px-2 border rounded-md"
                      name="employmentDate"
                      value={employmentDate}
                      onChange={(e) => setEmploymentDate(e.target.value)}
                    />
                    <div
                      type="text"
                      name="workExp"
                      className="text-sm font-medium leading-6 text-gray-900 mt-2"
                      style={{ border: 'none', padding: '0' }}
                    >
                      Месяцев на текущей работе: {workExp}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Сохранить
            </button>
            <button
              type="button"
              className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
              onClick={() => openModal()}
            >
              Загрузить документы
            </button>
          </div>
        </form>
      )}
      <div>
        {/* {showModal && (
          <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              marginLeft: '0',
            }}
          >
            <div className="w-[700px] h-[500px] bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col items-center overflow-hidden">
              <h1 className="text-2xl font-bold mb-4">Форма загрузки документов:</h1>
              <Profile />
              <button
                type="button"
                className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                onClick={() => closeModal()}
              >
                Закрыть окно
              </button>
            </div>{' '}
          </div>
        )} */}
      </div>
    </>
  );
}
