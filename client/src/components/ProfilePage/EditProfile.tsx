import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { profileGet, profilePut } from '../../Redux/thunks/profileThunk';

export default function EditProfile(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.profileSlice);
  const profile = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;

  const [firstName, setFirstName] = useState(userData?.first_name || '');
  const [middleName, setMiddleName] = useState(userData?.middle_name || '');
  const [lastName, setLastName] = useState(userData?.last_name || '');
  //   const [email, setEmail] = useState('super-Multer@was-born-on-Phiket.th');
  const [citizenship, setCitizenship] = useState(userData?.citizenship || '');
  const [income, setIncome] = useState(userData?.income || '');
  const [employmentDate, setEmploymentDate] = useState(userData?.work_date || '');
  const [workExp, setworkExp] = useState(userData?.work_exp || '');

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
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
    console.log(
      firstName,
      middleName,
      lastName,
      citizenship,
      income,
      employmentDate,
      JSON.stringify(monthsPassed),
    );
    const editUser = {
      id: userData.id,
      first_name: firstName,
      second_name: middleName,
      lest_name: lastName,
      citizenship,
      income,
      work_exp: monthsPassed,
      work_date: employmentDate,
    };
    console.log(editUser);
    void dispatch(profilePut(editUser));
    void dispatch(profileGet(user));
  };

  return (
    <>
      {loading ? (
        <form onSubmit={submitHandler}>
          <div className="container mx-auto mt-8 p-8 max-w-4xl flex justify-center items-center flex flex-col">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Ваши личные данные
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Добавить или изменить личные данные
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Чистый доход</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {' '}
                    <input
                      type="text"
                      className="w-full py-1 px-2 border rounded-md"
                      name="income"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
          </div>
        </form>
      ) : (
        <div>Ожидание</div>
      )}
    </>
  );
}
