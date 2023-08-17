import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'flowbite-react';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { getStates } from '../../../Redux/thunks/getStates';
import type { RootState } from '../../../Types/types';
import { profilePut } from '../../../Redux/thunks/profileThunk';
import { unregtUserGet } from '../../../Redux/thunks/unregThunk';

export default function MainCalculator(): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  const states = useAppSelector((state: RootState) => state.stateSlice.states);
  const status = useAppSelector((state) => state.profileSlice);
  const profile = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;
  const { loading } = status;
  const userInputs = useAppSelector((state) => state.unregSlice);
  console.log('userInputs=================>', userInputs);

  // console.log('USER', userData);
  // console.log('LOADING', loading);
  // console.log('states', states);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);

  // const [criminal, setСriminal] = useState<string>('false');
  // const [gender, setGender] = useState<string>('Male');
  const [citizenship, setCitizenship] = useState(
    userData?.citizenship || userInputs?.citizenship || '',
  );
  const [income, setIncome] = useState(userData?.income || userInputs?.income || 0);
  const [employmentDate, setEmploymentDate] = useState(
    userData?.work_date || userInputs?.employmentDate || '',
  );
  const [workExp, setworkExp] = useState(userData?.work_exp || 0);
  const [visaT, setvisaT] = useState(userData?.visaType || 'Не имеет значения');
  const [visaS, setvisaS] = useState(userData?.visaShare || 'Не имеет значения');

  const [filterStates, setFilterStates] = useState<string>('');
  const [oneState, setOneState] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    void dispatch(getStates());
  }, []);

  const openModal = (state) => {
    setOneState(state);
    setShowModal(true);
  };
  const closeModal = () => {
    setOneState([]);
    setShowModal(false);
  };

  const resetCalc = () => {
    console.log('resetCalc');
    setIncome(0);
    // setworkExp(0);
    setCitizenship('');
    setvisaT('');
    setvisaS('');
    setFilterStates('');
    if (formRef.current) {
      formRef.current.reset();
    }
    setFilterStates([]);
  };

  const toConsult = () => {
    window.scrollTo(0, 0);
    navigate('/user/profile');
  };

  const resetStates = () => {
    setFilterStates([]);
  };

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    window.scrollTo(0, 0);

    const editUser = {
      id: userData.id,
      citizenship,
      income,
      work_exp: workExp,
      work_date: employmentDate,
      visaType: visaT,
      visaShare: visaS,
    };
    // console.log(editUser);
    void dispatch(profilePut(editUser));

    console.log('visas', visaT, visaS, states);

    const visaTypeFilter =
      visaT !== 'Не имеет значения' ? states.filter((state) => state.visaType == visaT) : states;
    console.log('Отфильтрованные по типу визы:', visaTypeFilter);
    const visaShareFilter =
      visaS !== 'Не имеет значения' ? states.filter((state) => state.visaShare == visaS) : states;
    console.log('Отфильтрованные по семейной визе:', visaShareFilter);

    const incomeFilter =
      income !== 0 ? states.filter((state) => state.min_income < income) : states;
    console.log('Отфильтрованные по доходу:', incomeFilter);
    const citiFilter = states.filter((state) => {
      const bannedCitizenships = state.banned_citizenship.split(',').map((value) => value.trim());
      return !bannedCitizenships.includes(citizenship);
    });
    console.log('Отфильтрованные по гр-у:', citiFilter);
    let monthsPassed = 0;
    if (employmentDate === '') {
      monthsPassed = 12;
      // setworkExp(monthsPassed);
      // console.log('Отфильтрованные по работе1111111111:', monthsPassed);
    } else {
      const currentDate = new Date();
      const [year, month, day] = employmentDate.split('-').map(Number);
      const targetDate = new Date(year, month - 1, day);
      const timeDiff = currentDate - targetDate;
      monthsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
      // setworkExp(monthsPassed);
      // console.log('Отфильтрованные по работе222222222222:', monthsPassed);
    }
    console.log('Отфильтрованные по работе:', monthsPassed);
    const workFilter = states.filter((state) => state.work_exp < monthsPassed);
    console.log('Отфильтрованные по работе:', workFilter);

    const commonStates = incomeFilter.filter((state) => {
      const isInCitiFilter = citiFilter.some((filteredState) => filteredState.id === state.id);
      const isInWorkFilter = workFilter.some((filteredState) => filteredState.id === state.id);
      const isInvisaTypeFilter = visaTypeFilter.some(
        (filteredState) => filteredState.id === state.id,
      );
      const isInvisaShareFilter = visaShareFilter.some(
        (filteredState) => filteredState.id === state.id,
      );

      return isInCitiFilter && isInWorkFilter && isInvisaTypeFilter && isInvisaShareFilter;
    });

    console.log('Подходящие страны:', commonStates);
    setFilterStates(commonStates);
    const userInputs = {
      income,
      employmentDate,
      citizenship,
      visaT,
      visaS,
    };

    void dispatch(unregtUserGet(userInputs));
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <img src="/src/assets/reload-cat.gif" alt="" />
        </div>
      ) : (
        <div className="flex flex-row space-x-4 justify-center">
          {/* <div className='justify-center items-center flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"'> */}
          <div
            className='justify-center items-center flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"'
            style={{ maxHeight: '65vh' }}
          >
            <form ref={formRef} onSubmit={submitHandler} className="form-container">
              <div className="flex justify-center items-center flex-col">
                {/* <h1 className="text-2xl font-bold mb-4">Узнать подходящие направления</h1> */}
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-3xl font-bold tracking-tight text-[#233862]">
                    {/* Узнать подходящие страны */}
                    Digital Nomad Calculator
                  </h1>
                </div>

                <div className="w-[500px]">
                  <figure className="mb-2">
                    <blockquote className=" font-medium text-gray-600 sm:text-base dark:text-gray-700">
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

                <div className="w-[500px]">
                  <figure className="mt-4 mb-2">
                    <blockquote className=" font-medium text-gray-600 sm:text-base dark:text-gray-700">
                      <label htmlFor="visaT">Предпочтительный тип визы</label>{' '}
                    </blockquote>
                  </figure>

                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="visaT"
                      id="visaT"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 font-light text-gray-900 sm:text-base dark:text-gray-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      onChange={(e) => setvisaT(e.target.value)}
                    >
                      <option value={visaT}>{visaT}</option>
                      <option value="ВНЖ">ВНЖ</option>
                      <option value="Виза">Виза</option>
                      <option value="Не имеет значения">Не имеет значения</option>
                    </select>{' '}
                  </div>
                </div>

                <div className="w-[500px]">
                  <figure className="mt-4 mb-2">
                    <blockquote className=" font-medium text-gray-600 sm:text-base dark:text-gray-700">
                      <label htmlFor="visaS">Персональная виза или семейная</label>{' '}
                    </blockquote>
                  </figure>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="visaS"
                      id="visaS"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 font-light text-gray-900 sm:text-base dark:text-gray-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                      onChange={(e) => setvisaS(e.target.value)}
                    >
                      <option value={visaS}>{visaS}</option>
                      <option value="Семейная">Семейная</option>
                      <option value="Персональная">Персональная</option>
                      <option value="Не имеет значения">Не имеет значения</option>
                    </select>
                  </div>{' '}
                </div>

                <div className="w-[500px]">
                  <figure className="mt-4 mb-2">
                    <blockquote className=" font-medium text-gray-600 sm:text-base dark:text-gray-700">
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
                  </div>{' '}
                </div>

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
            </form>
          </div>
          {showModal && (
            <div
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                marginLeft: '0',
              }}
            >
              <div className="w-[800px] h-[700px] bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col items-center overflow-hidden">
                <button
                  onClick={closeModal}
                  className="ml-auto w-[40px] px-0 py-1 pt-2 text-white bg-gradient-to-br from-blue-400 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center"
                >
                  X
                </button>
                <h1 className="text-2xl font-bold mb-4">{oneState.state_name}</h1>
                <div className="actions flex-grow overflow-y-auto">
                  <ul>
                    {oneState.actions.split('\n').map((action, index) => (
                      <li key={index}>{action}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-row space-x-4 justify-space-between">
                  <button
                    type="button"
                    onClick={toConsult}
                    className="w-[180.28px] mt-4 px-2 py-1 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center mr-2 mb-2"
                  >
                    Запросить консультацию
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* <div className='justify-center items-center flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"'> */}
          {filterStates.length ? (
            <div className=" text-center bg-white p-6 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="w-[500px] mb-6">
                <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-3xl font-bold tracking-tight text-[#233862]">
                  {/* Страны, подходящие Вам */}
                  Подходящие страны
                </h1>
                <figure className="mt-2">
                  <blockquote className="text-center text-base font-semibold leading-7 text-[#76a1dd]">
                    Выберите страну, чтобы узнать подробности
                  </blockquote>
                </figure>
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

              <div className="flex flex-row space-x-4 justify-center items-end	">
                <figure className="mt-6">
                  <blockquote className="text-center font-light text-gray-700 lg:mb-0 sm:text-lg dark:text-gray-700">
                    <button
                      onClick={toConsult}
                      className="text-base font-semibold bg-gradient-to-r from-purple-600 to-[#76a1dd] text-transparent bg-clip-text"
                    >
                      Запишитесь на консультацию <span aria-hidden="true">→</span>
                    </button>
                    <br />И мы поможем вам в подборе идеальной страны{' '}
                  </blockquote>
                </figure>
              </div>
            </div>
          ) : null}{' '}
          {/* </div> */}
        </div>
      )}
      <div />
    </div>
  );
}
