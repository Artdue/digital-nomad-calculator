import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { profilePut } from '../../Redux/thunks/profileThunk';
import Profile from './Profile';
import Status from './Status';
import type { IEditUserInputs2 } from '../../Types/calcTypes';

export default function EditProfile(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const profile = useAppSelector((state) => state.profileSlice);
  const statusS = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;
  const { loading } = statusS;
  const userInputs = useAppSelector((state) => state.unregSlice);

  const [status, setStatus] = useState('');

  const [firstName, setFirstName] = useState(userData?.first_name || '');
  const [middleName, setMiddleName] = useState(userData?.middle_name || '');
  const [lastName, setLastName] = useState(userData?.last_name || '');
  const [citizenship, setCitizenship] = useState(
    userData?.citizenship || userInputs?.citizenship || '',
  );
  const [income, setIncome] = useState<number>(userData?.income || userInputs?.income || 0);
  const [employmentDate, setEmploymentDate] = useState(
    userData?.work_date || userInputs?.employmentDate || '',
  );
  const [workExp, setworkExp] = useState(userData?.work_exp || 0);
  const [phone, setPhone] = useState(userData?.phoneNumber || '');
  const [birthDate, setbirthDate] = useState(userData?.birthDate || '');
  const [visaType, setvisaType] = useState(userData?.visaType || userInputs?.visaT || '');
  const [visaShare, setvisaShare] = useState(userData?.visaShare || userInputs?.visaS || '');

  useEffect(() => {
    if (userData && userData.document_status) {
      if (userData.document_status === 'Новый пользователь') {
        setStatus('');
      } else {
        setStatus(userData.document_status);
      }
    }
  }, [userData?.document_status]);

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo(0, 0);
    console.log('ddddddddddd', userData);
    setFirstName(firstName);
    setMiddleName(middleName);
    setLastName(lastName);
    setCitizenship(citizenship);
    setIncome(income);
    setEmploymentDate(employmentDate);
    const currentDate = new Date();
    const [year, month, day] = employmentDate.split('-').map(Number);
    const targetDate = new Date(year, month - 1, day);
    const timeDiff = currentDate.getTime() - targetDate.getTime();
    const monthsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
    setworkExp(monthsPassed);
    setPhone(phone);
    setbirthDate(birthDate);

    const editUser: IEditUserInputs2 = {
      id: userData.id,
      first_name: firstName,
      second_name: middleName,
      last_name: lastName,
      birthDate,
      phone,
      citizenship,
      income,
      work_exp: monthsPassed || 0,
      work_date: employmentDate,
      visaType,
      visaShare,
      appStatus: userData.appStatus,
      document_status: userData.document_status || 'Новый пользователь',
    };
    void dispatch(profilePut(editUser));
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <img src="/src/assets/reload-cat.gif" alt="" />
        </div>
      ) : (
        <form onSubmit={submitHandler as never}>
          <div className="container mx-auto mt-8 p-8 max-w-4xl justify-center items-center flex-col block rounded-lg bg-white shadow-md dark:bg-neutral-700">
            <div className="px-4 sm:px-0 text-center ">
              {status && (
                <div className="flex items-start justify-center mb-8 mt-0">
                  <div
                    className=" px-4 py-2 text-white rounded-md bg-gradient-to-br from-green-700 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                    style={{ width: '700px' }}
                  >
                    <h4>Заявка отправлена!</h4>
                    <h6>Данные актуальны. Статус рассмотрения документов: {status}</h6>
                  </div>
                </div>
              )}
              <h1 className="text-2xl font-bold leading-7 text-gray-900">
                Анкета для получения консультации
              </h1>
              <p className="mt-1 max-w-full text-sm leading-6 text-gray-500">
                Заполните, пожалуйста, как можно больше полей для более эффективной консультации
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">Имя</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="firstName"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </dd>
                </div>

                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Отчество
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="middleName"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Фамилия
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Дата рождения</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="date"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="birthDate"
                      value={birthDate}
                      onChange={(e) => setbirthDate(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Номер телефона
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="phone"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Гражданство
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <select
                      name="citizenship"
                      id="citizenship"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setCitizenship(e.target.value)}
                    >
                      <option value={citizenship}>{citizenship}</option>
                      <option value="RU">RU - гражданин РФ</option>
                      <option value="UKR">UKR - гражданин Украины</option>
                      <option value="KZ">KZ - гражданин Казахстана</option>
                      <option value="UZ">UZ - гражданин Узбекистана</option>
                      <option value="TJ">TJ - гражданин Таджикистана</option>
                      <option value="AZ">AZ - гражданин Азербайджана</option>
                    </select>
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Чистый доход в €
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="income"
                      value={Number(income)}
                      onChange={(e) => setIncome(Number(e.target.value))}
                    />
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Виза или ВНЖ
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <select
                      name="visaT"
                      id="visaT"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setvisaType(e.target.value)}
                    >
                      <option value={visaType}>{visaType}</option>
                      <option value="ВНЖ">ВНЖ</option>
                      <option value="Виза">Виза</option>
                      <option value="Не имеет значения">Не имеет значения</option>
                    </select>
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Персональная или семейная виза
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <select
                      name="visaT"
                      id="visaT"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setvisaShare(e.target.value)}
                    >
                      <option value={visaShare}>{visaShare}</option>
                      <option value="Персональная">Персональная</option>
                      <option value="Семейная">Семейная</option>
                      <option value="Не имеет значения">Не имеет значения</option>
                    </select>
                  </dd>
                </div>
                <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900 mt-[11.2px]">
                    Примерная дата устройства на текущую работу
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      type="date"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="employmentDate"
                      value={employmentDate}
                      onChange={(e) => setEmploymentDate(e.target.value)}
                    />
                    <div
                      className="text-sm font-medium leading-6 text-gray-900 mt-2"
                      style={{ border: 'none', padding: '0' }}
                    >
                      Месяцев на текущей работе: {workExp}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="m-2 flex justify-center">
              <button
                type="submit"
                className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
              >
                Сохранить
              </button>
            </div>{' '}
          </div>
        </form>
      )}
      <Profile />
      <Status />
    </>
  );
}
