import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { getStates } from '../../../Redux/thunks/getStates';
import type { RootState } from '../../../Types/types';
// import type { RootState } from '../../../Types/types';

export default function Calculator(): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  const states = useAppSelector((state: RootState) => state.stateSlice.states);
  const dispatch = useAppDispatch();
  const [income, setIncome] = useState<string>('');
  const [workExp, setWorkExp] = useState<string>('');
  const [citizenship, setCitizenship] = useState<string>('');
  const [filterStates, setFilterStates] = useState<string>('');

  useEffect(() => {
    void dispatch(getStates());
  }, []);

  console.log(states);

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    console.log('Выбранные значения:', income, workExp, citizenship);
    const incomeFilter = states.filter((state) => state.min_income < income);
    console.log('Отфильтрованные по доходу:', incomeFilter);
    const citiFilter = states.filter((state) => {
      const bannedCitizenships = state.banned_citizenship.split(',').map((value) => value.trim());
      return !bannedCitizenships.includes(citizenship);
    });
    console.log('Отфильтрованные по гр-у:', citiFilter);
    const workFilter = states.filter((state) => state.work_exp < workExp);
    console.log('Отфильтрованные по работе:', workFilter);
    const commonStates = incomeFilter.filter((state) => {
      const isInCitiFilter = citiFilter.some((filteredState) => filteredState.id === state.id);
      const isInWorkFilter = workFilter.some((filteredState) => filteredState.id === state.id);
      return isInCitiFilter && isInWorkFilter;
    });
    console.log('Подходящие страны:', commonStates);
    setFilterStates(commonStates);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form-container">
        <div className="flex justify-center items-center flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Узнать подходящие направления</h1>
          <div style={{ width: '500px' }}>
            <label
              htmlFor="citizenship"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Чистый доход более:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <select
                name="income"
                id="income"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setIncome(e.target.value)}
              >
                <option value="">Выберите</option>
                <option value="500">500$</option>
                <option value="1000">1000$</option>
                <option value="1500">1500$</option>
                <option value="2000">2000$</option>
                <option value="2500">2500$</option>
              </select>
            </div>
          </div>
          <div style={{ width: '500px' }}>
            <label
              htmlFor="citizenship"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              На текущей работе более:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <select
                name="work_exp"
                id="work_exp"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setWorkExp(e.target.value)}
              >
                <option value="">Выберите</option>
                <option value="3">3 месяцев</option>
                <option value="6">6 месяцев</option>
                <option value="9">9 месяцев</option>
                <option value="12">12 месяцев</option>
                <option value="18">18 месяцев</option>
              </select>
            </div>
          </div>
          <div style={{ width: '500px' }}>
            <label
              htmlFor="citizenship"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Гражданство:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <select
                name="citizenship"
                id="citizenship"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setCitizenship(e.target.value)}
              >
                <option value="">Выберите</option>
                <option value="USA">USA</option>
                <option value="RU">RU</option>
                <option value="UK">UK</option>
                <option value="GER">GER</option>
                <option value="POL">POL</option>
              </select>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Подобрать
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center flex flex-col block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Страны подходящие для Вас:
        </h5>
        <div className="states-container mt-4">
          {filterStates.length
            ? filterStates.map((state: postType, i) => (
                <div key={`${i}`} className="state mt-3">
                  <div className="state-header">
                    <p className="title mt-1 font-large leading-tight text-neutral-800 dark:text-neutral-50">
                      {`${i + 1} - `} {state.state_name}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
        <h6 className="mt-3 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Зарегистрируетесь чтобы увидеть подробную информацию
        </h6>
      </div>
    </>
  );
}
