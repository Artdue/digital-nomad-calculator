import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
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
    const incomeFilter =
      income !== '' ? states.filter((state) => state.min_income < income) : states;
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
        {/* <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4">
          <div className="flex-1 m-2 sm:w-[400px] bg-[#F5F5F5] p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"> */}
        <div className="flex flex-row space-x-4 justify-center">
          <div
            // className='justify-center items-center flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"'
            className='h-[70vh] flex-1 m-2 sm:w-[400px] justify-center items-center flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"'
            // style={{ maxHeight: '90vh' }}
          >
            {' '}
            <form ref={formRef} onSubmit={submitHandler} className="space-y-12 p-6">
              <div className="flex justify-center items-center flex-col">
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-3xl font-bold tracking-tight text-[#233862]">
                    {/* Узнать подходящие страны */}
                    Digital Nomad Calculator
                  </h1>
                </div>
                {/* 
                <div className="w-full sm:w-[400px] mt-2">
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
                      <option value={citizenship}>{citizenship}</option>
                      <option value="RU">RU - гражданин РФ</option>
                      <option value="UKR">UKR - гражданин Украины</option>
                      <option value="KZ">KZ - гражданин Казахстана</option>
                      <option value="UZ">UZ - гражданин Узбекистана</option>
                      <option value="TJ">TJ - гражданин Таджикистана</option>
                      <option value="AZ">AZ - гражданин Азербайджана</option>
                    </select>
                  </div>
                </div> */}

                <div className="w-[500px]">
                  <figure className="mb-2">
                    <blockquote className="text-center font-medium text-gray-600 sm:text-base dark:text-gray-700">
                      <label htmlFor="citizenship">Гражданство</label>{' '}
                    </blockquote>
                  </figure>

                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="citizenship"
                      id="citizenship"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 font-light text-gray-900 sm:text-base dark:text-gray-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
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
                  </div>
                </div>

                {/* <div className="w-full sm:w-[400px] mt-2">
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
                      <option value={income}>Не имеет значения</option>
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
                </div> */}

                <div className="w-[500px]">
                  <figure className="mt-4 mb-2">
                    <blockquote className="font-medium text-gray-600 sm:text-base dark:text-gray-700">
                      <label htmlFor="income"> Доход в месяц более</label>{' '}
                    </blockquote>
                  </figure>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="income"
                      id="income"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 font-light text-gray-900 sm:text-base dark:text-gray-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      onChange={(e) => setIncome(e.target.value)}
                    >
                      <option value={income}>{income}</option>
                      <option value="500">500€</option>
                      <option value="1000">1000€</option>
                      <option value="1500">1500€</option>
                      <option value="2000">2000€</option>
                      <option value="2500">2500€</option>
                      <option value="3000">3000€</option>
                      <option value="4000">4000€</option>
                      <option value="5000">5000€</option>
                    </select>
                  </div>{' '}
                </div>

                {/* <div className="w-full sm:w-[400px] mt-2">
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
                  </div>{' '}
                </div> */}

                <div className="w-[500px]">
                  <figure className="mt-4 mb-2">
                    <blockquote className=" font-medium text-gray-600 sm:text-base dark:text-gray-700">
                      <label htmlFor="date"> Примерная дата устройства на текущую работу</label>{' '}
                    </blockquote>
                  </figure>

                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      id="date"
                      type="date"
                      className="block w-full px-4 py-2  rounded-md border-0  pl-5 pr-2 font-light text-gray-900 sm:text-base dark:text-gray-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      name="employmentDate"
                      value={employmentDate}
                      onChange={(e) => setEmploymentDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="flex justify-center mt-2">
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
                </div> */}

                <div className="flex mt-2 ">
                  <button className="m-2 mt-4 px-4 py-3 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2">
                    Подобрать
                  </button>

                  <button
                    type="button"
                    onClick={resetCalc}
                    className="w-[106.28px] m-2 mt-4 px-4 py-3 text-white bg-gradient-to-br from-blue-500 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center mr-2 mb-2"
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
            <div className=" text-center bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="w-[500px] mb-6">
                <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-3xl font-bold tracking-tight text-[#233862]">
                  {/* Страны, подходящие Вам */}
                  Подходящие страны
                </h1>
                <div className="flex flex-row space-x-4 justify-center items-end	">
                  <figure className="mt-6">
                    <blockquote className="text-center font-light text-gray-700 lg:mb-0 sm:text-lg dark:text-gray-700">
                      <button
                        onClick={toReg}
                        className="text-base font-semibold bg-gradient-to-r from-purple-600 to-[#76a1dd] text-transparent bg-clip-text"
                      >
                        Зарегистрируйтесь <span aria-hidden="true">→</span>
                      </button>
                      <br /> чтобы увидеть подробную информацию
                    </blockquote>
                  </figure>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filterStates.map((state, i) => (
                  <button className="" onClick={() => openModal(state)}>
                    <div key={i} className="max-w-sm border rounded">
                      <figure className="py-3">
                        <blockquote className="font-light text-gray-700 sm:text-lg dark:text-gray-700">
                          {state.state_name}
                        </blockquote>
                      </figure>
                    </div>
                  </button>
                ))}
              </div>
              {/*               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filterStates.map((state, i) => (
                  <div key={i} className="max-w-sm">
                    <Card>
                      <h5 className="font-normal text-gray-700 dark:text-gray-400 text-center">
                        <p>{state.state_name}</p>
                      </h5>
                    </Card>
                  </div>
                ))}
              </div> */}

              {/* <div className="flex justify-center items-end col-span-2 mt-3 space-between">
                <p className="text-center">
                  <button
                    onClick={toReg}
                    className="text-base font-semibold leading-7 text-blue-500"
                  >
                    {' '}
                    Зарегистрируйтесь
                  </button>
                  , чтобы увидеть подробную информацию
                </p>
              </div> */}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
