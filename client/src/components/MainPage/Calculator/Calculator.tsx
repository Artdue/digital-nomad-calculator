import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { getStates } from '../../../Redux/thunks/getStates';
import type { RootState } from '../../../Types/types';
import { unregtUserGet } from '../../../Redux/thunks/unregThunk';

// import type { RootState } from '../../../Types/types';

export default function Calculator(): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  const states = useAppSelector((state: RootState) => state.stateSlice.states);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [income, setIncome] = useState<string>('');
  const [employmentDate, setEmploymentDate] = useState('');
  const [workExp, setWorkExp] = useState<string>('');
  const [citizenship, setCitizenship] = useState<string>('');
  const [filterStates, setFilterStates] = useState<string>('');

  useEffect(() => {
    void dispatch(getStates());
  }, []);

  const resetCalc = () => {
    setIncome('');
    setEmploymentDate('');
    setWorkExp('');
    setCitizenship('');
    setFilterStates('');
    if (formRef.current) {
      formRef.current.reset();
    }
    setFilterStates([]);
  };

  const toReg = () => {
    navigate('/user/register');
    window.scrollTo(0, 0);
  };


  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    let monthsPassed = 0;
    if (employmentDate === '') {
      monthsPassed = 12;
      // setworkExp(monthsPassed);
      console.log('Отфильтрованные по работе1111111111:', monthsPassed);
    } else {
      const currentDate = new Date();
      const [year, month, day] = employmentDate.split('-').map(Number);
      const targetDate = new Date(year, month - 1, day);
      const timeDiff = currentDate - targetDate;
      monthsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
      // setworkExp(monthsPassed);
      console.log('Отфильтрованные по работе222222222222:', monthsPassed);
    }
    console.log('Отфильтрованные по работе:', monthsPassed);
    const workFilter = states.filter((state) => state.work_exp < monthsPassed);
    console.log('Отфильтрованные по работе:', workFilter);
    console.log('Выбранные значения:', income, employmentDate, monthsPassed, citizenship);
    const incomeFilter = states.filter((state) => state.min_income < income);
    console.log('Отфильтрованные по доходу:', incomeFilter);

    const citiFilter = states.filter((state) => {
      const bannedCitizenships = state.banned_citizenship.split(',').map((value) => value.trim());
      return !bannedCitizenships.includes(citizenship);
    });
    console.log('Отфильтрованные по гр-у:', citiFilter);

    // const workFilter = states.filter((state) => state.work_exp < monthsPassed);
    // console.log('Отфильтрованные по работе:', workFilter);

    const commonStates = incomeFilter.filter((state) => {
      const isInCitiFilter = citiFilter.some((filteredState) => filteredState.id === state.id);
      const isInWorkFilter = workFilter.some((filteredState) => filteredState.id === state.id);
      return isInCitiFilter && isInWorkFilter;
    });

    console.log('Подходящие страны:', commonStates);
    setFilterStates(commonStates);

    const userInputs = {
      income,
      employmentDate,
      citizenship,
    };

    void dispatch(unregtUserGet(userInputs));
  };

  return (
    <>
      {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex"> */}{' '}
      {/* <form ref={formRef} onSubmit={submitHandler} className="space-y-12  ">  */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
          <div className="flex-1 m-2 sm:w-[400px] bg-[#F5F5F5] p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <form ref={formRef} onSubmit={submitHandler} className="space-y-12 p-6">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-bold mb-4 text-center">
                  Узнать подходящие направления
                </h1>
                <div className="w-full sm:w-[400px] mt-2">
                  <label
                    htmlFor="income"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Чистый доход более
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="income"
                      id="income"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setIncome(e.target.value)}
                    >
                      <option value={income}>Выберите</option>
                      <option value="500">500€</option>
                      <option value="1000">1000€</option>
                      <option value="1500">1500€</option>
                      <option value="2000">2000€</option>
                      <option value="2500">2500€</option>
                      <option value="3000">3000€</option>
                      <option value="4000">4000€</option>
                      <option value="5000">5000€</option>
                    </select>
                  </div>
                </div>
                <div className="w-full sm:w-[400px] mt-2">
                  {/* Изменение здесь */}
                  <label
                    htmlFor="citizenship"
                    className="block text-sm font-medium leading-6 text-gray-900 mt-2"
                  >
                    Примерная дата устройства на текущую работу
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="date"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="employmentDate"
                      value={employmentDate}
                      onChange={(e) => setEmploymentDate(e.target.value)}
                    />
                    {/* <div
                className="text-sm font-medium leading-6 text-gray-900 mt-2"
                style={{ border: 'none', padding: '0' }}
              >
                Месяцев на текущей работе: {workExp}
              </div> */}
                    {/* <select
                name="work_exp"
                id="work_exp"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setWorkExp(e.target.value)}
              >
                <option value={workExp}>Выберите</option>
                <option value="3">3 месяца</option>
                <option value="6">6 месяцев</option>
                <option value="9">9 месяцев</option>
                <option value="12">12 месяцев</option>
                <option value="18">18 месяцев</option>
                <option value="18">24 месяца</option>
              </select> */}
                    {/* </div> */}
                  </div>{' '}
                </div>

                <div className="w-full sm:w-[400px] mt-2">
                  {/* Изменение здесь */}
                  <label
                    htmlFor="citizenship"
                    className="block text-sm font-medium leading-6 text-gray-900 mt-2"
                  >
                    Гражданство
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="citizenship"
                      id="citizenship"
                      className="block w-full px-4 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setCitizenship(e.target.value)}
                    >
                      <option value={citizenship}>Выберите</option>
                      <option value="RU">RU - гражданин РФ</option>
                      <option value="UKR">UKR - гражданин Украины</option>
                      <option value="KZ">KZ - гражданин Казахстана</option>
                      <option value="UZ">UZ - гражданин Узбекистана</option>
                      <option value="TJ">TJ - гражданин Таджикистана</option>
                      <option value="AZ">AZ - гражданин Азербайджана</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  {' '}
                  <button className="m-2 mt-4 px-4 py-3 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2">
                    Подобрать
                  </button>
                  <button
                    onClick={resetCalc}
                    className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2 "
                  >
                    Сбросить
                  </button>
                </div>
              </div>
            </form>{' '}
          </div>
          {/* {filterStates.length ? (
            <div className="flex-1 m-2 bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <h5 className=" text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-900 text-center mb-4">
                Страны подходящие для Вас
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filterStates.length
                  ? filterStates.map((state: postType, i) => (
                      <Card
                        key={i}
                        className="max-w-sm"
                        // style={{ backgroundImage: 'linear-gradient(to top right, #a0d8ff, #c3e3fd)' }}
                      >
                        <h5 className="font-normal text-gray-700 dark:text-gray-400 text-center">
                          <p>{state.state_name}</p>
                        </h5>
                      </Card>
                    ))
                  : null}
                <div className="flex justify-center items-center col-span-2 mt-3">
                  <p className="text-center">
                    <Link
                      to="/user/register"
                      className="text-base font-semibold leading-7 text-blue-500 "
                    >
                      {' '}
                      Зарегистрируйтесь
                    </Link>
                    , чтобы увидеть подробную информацию
                  </p>
                </div>
              </div>
            </div>
          ) : null} */}
          {filterStates.length ? (
            <div className="flex-1 m-2 bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <h5 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-900 text-center mb-4">
                Страны подходящие для Вас
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filterStates.map((state: postType, i) => (
                  <div key={i} className="max-w-sm">
                    <Card>
                      <h5 className="font-normal text-gray-700 dark:text-gray-400 text-center">
                        <p>{state.state_name}</p>
                      </h5>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-end col-span-2 mt-3 space-between">
                <p className="text-center">
                  <button
                    onClick={toReg}
                    className="text-base font-semibold leading-7 text-blue-500"
                  >
                    {' '}
                    {/* <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-600 to-blue-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"> */}
                    Зарегистрируйтесь {/* </span> */}
                  </button>
                  , чтобы увидеть подробную информацию
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
