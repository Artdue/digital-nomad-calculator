import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { getStates } from '../../../Redux/thunks/getStates';
import type { RootState } from '../../../Types/types';
import { profilePut } from '../../../Redux/thunks/profileThunk';

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
  const [visaT, setvisaT] = useState(userData?.visaType || '');
  const [visaS, setvisaS] = useState(userData?.visaShare || '');

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

    const incomeFilter = states.filter((state) => state.min_income < income);
    // console.log('Отфильтрованные по доходу:', incomeFilter);
    const citiFilter = states.filter((state) => {
      const bannedCitizenships = state.banned_citizenship.split(',').map((value) => value.trim());
      return !bannedCitizenships.includes(citizenship);
    });
    // console.log('Отфильтрованные по гр-у:', citiFilter);
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
    // console.log('Отфильтрованные по работе:', workFilter);

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

    // console.log('Подходящие страны:', commonStates);
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
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <img src="/src/assets/reload-cat.gif" alt="" />
        </div>
      ) : (
        <div className="flex flex-row space-x-4 justify-center">
          <div className='justify-center items-center flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"'>
            <form ref={formRef} onSubmit={submitHandler} className="form-container">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-bold mb-4">Узнать подходящие направления</h1>

                <div style={{ width: '500px' }}>
                  <label
                    htmlFor="citizenship"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Гражданство
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="citizenship"
                      id="citizenship"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <div style={{ width: '500px' }}>
                  <label
                    htmlFor="criminal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Предпочтительный тип визы
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="visaT"
                      id="visaT"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setvisaT(e.target.value)}
                    >
                      <option value={visaT}>{visaT}</option>
                      <option value="ВНЖ">ВНЖ</option>
                      <option value="Виза">Виза</option>
                      <option value="Не имеет значения">Не имеет значения</option>
                    </select>
                  </div>
                </div>
                <div style={{ width: '500px' }}>
                  <label
                    htmlFor="criminal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Персональная виза или семейная
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="visaS"
                      id="visaS"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setvisaS(e.target.value)}
                    >
                      <option value={visaS}>{visaS}</option>
                      <option value="Семейная">Семейная</option>
                      <option value="Персональная">Персональная</option>
                      <option value="Не имеет значения">Не имеет значения</option>
                    </select>
                  </div>
                </div>
                <div style={{ width: '500px' }}>
                  <label
                    htmlFor="citizenship"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Доход в месяц более
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="income"
                      id="income"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setIncome(e.target.value)}
                    >
                      <option value={income}>{income}€</option>
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
                <div style={{ width: '500px' }}>
                  <label
                    htmlFor="citizenship"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Примерная дата устройства на текущую работу
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="date"
                      className="w-full py-1 px-2 border rounded-md"
                      name="employmentDate"
                      value={employmentDate}
                      onChange={(e) => setEmploymentDate(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div style={{ width: '500px' }}>
                  <label
                    htmlFor="work_exp"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    На текущей работе более (в месяцах):
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                      name="work_exp"
                      id="work_exp"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setworkExp(e.target.value)}
                    >
                      <option value={workExp}>{workExp}</option>
                      <option value="3">3 месяца</option>
                      <option value="6">6 месяцев</option>
                      <option value="9">9 месяцев</option>
                      <option value="12">12 месяцев</option>
                      <option value="18">18 месяцев</option>
                      <option value="18">24 месяца</option>
                    </select>
                  </div>
                </div> */}
                <div className="flex flex-row space-x-4 justify-space-between">
                  <button className="mt-4 mr-8 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-green-500">
                    Подобрать
                  </button>
                  <button
                    type="button"
                    onClick={resetCalc}
                    className="mt-4 ml-4 px-8 py-2 bg-indigo-600 text-white rounded-md hover:bg-green-500"
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
                    onClick={closeModal}
                    className="mt-4 mr-8 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                    style={{
                      alignSelf: 'center',
                    }}
                  >
                    Закрыть
                  </button>
                  <button
                    onClick={toConsult}
                    className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                    style={{
                      alignSelf: 'center',
                    }}
                  >
                    Получить консультацию
                  </button>
                </div>
              </div>
            </div>
          )}
          {filterStates.length ? (
            <div className="flex justify-between items-center flex flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="states-container mt-4">
                <div className="flex justify-center items-center flex flex-col state mt-3">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Страны подходящие для Вас
                  </h5>
                </div>
                {filterStates.length ? (
                  <div
                    className="flex justify-flex-start items-center flex flex-col w-full"
                    style={{ width: '500px' }}
                  >
                    {filterStates.map((state, i) => (
                      <div
                        key={`${i}`}
                        className="flex justify-center items-center flex flex-col state mt-3"
                        style={{ width: '300px' }}
                      >
                        <div className="flex justify-center items-center flex flex-col state-header">
                          <p className="title mt-1 font-large leading-tight text-neutral-800 dark:text-neutral-50">
                            {`${i + 1} - `} {state.state_name}
                          </p>
                          <button
                            type="button"
                            className="mt-4 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                            onClick={() => openModal(state)}
                          >
                            Подробнее
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-row space-x-4 justify-space-between">
                <button
                  type="button"
                  onClick={resetStates}
                  className="mt-4 mr-8 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-green-500"
                >
                  Закрыть
                </button>
                <button
                  onClick={toConsult}
                  className="mt-4 ml-8 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-green-500"
                  style={{
                    alignSelf: 'center',
                  }}
                >
                  Консультация
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}
      <div />
    </>
  );
}
