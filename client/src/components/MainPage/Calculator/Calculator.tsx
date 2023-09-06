import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import getStates from '../../../Redux/thunks/getStates';
import type { Istate, RootState } from '../../../Types/types';
import { unregtUserGet } from '../../../Redux/thunks/unregThunk';
import type { IuserInputs } from '../../../Types/calcTypes';

export default function Calculator(): React.JSX.Element {
  const states = useAppSelector((state: RootState) => state.stateSlice.states);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [income, setIncome] = useState<number>(0);
  const [employmentDate, setEmploymentDate] = useState('');
  const [workExp, setWorkExp] = useState<string>('');
  const [citizenship, setCitizenship] = useState<string>('');
  const [filterStates, setFilterStates] = useState<Istate[]>([]);
  const [showImage, setShowImage] = useState(true);

  const [showNotification1, setShowNotification1] = useState(false);

  useEffect(() => {
    void dispatch(getStates());
  }, [dispatch]);

  const resetCalc = (): void => {
    setIncome(0);
    setEmploymentDate('');
    setWorkExp('');
    setCitizenship('');
    setFilterStates([]);
    if (formRef.current) {
      formRef.current.reset();
    }
    setFilterStates([]);
  };

  const navigate = useNavigate();
  const toReg = (): void => {
    navigate('/user/register');
    window.scrollTo(0, 0);
  };

  const submitHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    let monthsPassed = 0;
    if (employmentDate === '') {
      monthsPassed = 12;
    } else {
      const currentDate = new Date();
      const [year, month, day] = employmentDate.split('-').map(Number);
      const targetDate = new Date(year, month - 1, day);
      const timeDiff = currentDate.getTime() - targetDate.getTime();
      monthsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44));
      setShowImage(false);
    }

    const workFilter: Istate[] = states.filter((state) => state.work_exp < monthsPassed);

    const incomeFilter =
      income !== 0 ? states.filter((state) => state.min_income < income) : states;

    const citiFilter = states.filter((state) => {
      const bannedCitizenships = state.banned_citizenship.split(',').map((value) => value.trim());
      return !bannedCitizenships.includes(citizenship);
    });

    const commonStates: Istate[] = incomeFilter.filter((state) => {
      const isInCitiFilter = citiFilter.some((filteredState) => filteredState.id === state.id);
      const isInWorkFilter = workFilter.some((filteredState) => filteredState.id === state.id);
      return isInCitiFilter && isInWorkFilter;
    });

    if (commonStates.length) {
      setFilterStates(commonStates);
    } else {
      setShowNotification1(true);
      setTimeout(() => {
        setShowNotification1(false);
      }, 3000);
    }

    const userInputs: IuserInputs = {
      income,
      employmentDate,
      citizenship,
      visaS: '',
      visaT: '',
    };

    void dispatch(unregtUserGet(userInputs));
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl mx-auto w-full lg:flex space-y-0 px-4 lg:px-8 md:px-0">
        <div className="lg:w-1/2 px-4 ">
          {showNotification1 && (
            <div
              id="status"
              className="fixed top-16 left-1/2 animate-pulse transform -translate-x-1/2 w-300 bg-gradient-to-br from-purple-600 to-blue-500 p-4 rounded-md text-white text-center"
              style={{
                transition: 'opacity 0.5s',
                zIndex: 999999999,
                opacity: showNotification1 ? 1 : 0,
              }}
            >
              Не нашлось подходящих стран🙈
              <br />
              Попробуйте выбрать другие данные
            </div>
          )}
          <div className="lg:mt-10 mt-0 lg:mx-auto lg:w-full lg:max-w-lg md:mx-auto md:w-full md:max-w-md sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mb-6">
              <h1 className="lg:mt-10 mt-0 text-center text-2xl leading-9 sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#337CE5]">
                Digital Nomad Calculator
              </h1>
            </div>
            <p className="mt-1 text-center  max-w-full text-sm leading-6 text-gray-500">
              Заполните больше полей, чтобы получить более точные результаты
            </p>
          </div>
          <div className="mt-10 lg:mx-auto lg:w-full lg:max-w-lg md:mx-auto md:w-full md:max-w-md sm:mx-auto sm:w-full sm:max-w-sm">
            {' '}
            <form ref={formRef} onSubmit={submitHandler as never} className="space-y-6">
              <div>
                <figure className="mb-2 mt-4">
                  <blockquote className="block text-sm font-medium leading-6 text-[#233862]">
                    <span>Гражданство</span>{' '}
                  </blockquote>
                </figure>

                <div className="relative mt-2 rounded-md shadow-sm">
                  <select
                    name="citizenship"
                    id="citizenship"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 font-light text-[#233862] sm:text-base ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#337CE5] sm:leading-6 md:w-full"
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

              <div>
                <figure className="mt-4 mb-2">
                  <blockquote className="block text-sm font-medium leading-6 text-[#233862]">
                    <span> Доход в месяц более</span>{' '}
                  </blockquote>
                </figure>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <select
                    name="income"
                    id="income"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 font-light text-[#233862] sm:text-base ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#337CE5] sm:leading-6 md:w-full"
                    onChange={(e) => setIncome(Number(e.target.value))}
                  >
                    <option value={income}>{income}€</option>
                    <option value={500}>500€</option>
                    <option value={1000}>1000€</option>
                    <option value={1500}>1500€</option>
                    <option value={2000}>2000€</option>
                    <option value={2500}>2500€</option>
                    <option value={3000}>3000€</option>
                    <option value={4000}>4000€</option>
                    <option value={5000}>5000€</option>
                  </select>
                </div>{' '}
              </div>

              <div>
                <figure className="mt-4 mb-2">
                  <blockquote className="block text-sm font-medium leading-6 text-[#233862]">
                    <span> Примерная дата устройства на текущую работу</span>{' '}
                  </blockquote>
                </figure>

                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    id="date"
                    type="date"
                    className="block w-full px-4 py-2  rounded-md border-0  pl-5 pr-2 font-light text-[#233862] sm:text-base ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#337CE5] sm:leading-6"
                    name="employmentDate"
                    value={employmentDate}
                    onChange={(e) => setEmploymentDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={resetCalc}
                  variant="gradient"
                  className="rounded-full  bg-[#76a1dd] mr-2"
                >
                  Сбросить
                </Button>
                <Button
                  type="submit"
                  variant="gradient"
                  className="rounded-full bg-[#233862] ml-2 "
                >
                  Подобрать
                </Button>
              </div>
            </form>
          </div>{' '}
        </div>

        <div className="w-full lg:w-1/2 px-4 mx-auto max-w-screen-xl md:max-w-lg md:w-full">
          {filterStates.length ? (
            <>
              <div className="mt-10 lg:mx-auto lg:w-full lg:max-w-lg md:mx-auto md:w-full md:max-w-md sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mb-6">
                  <h1 className="mt-10 text-center text-2xl leading-9 sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#233862]">
                    Подходящие страны
                  </h1>
                </div>
              </div>
              <div className="mt-10 lg:mx-auto lg:w-full lg:max-w-lg sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filterStates.map((state) => (
                    <button
                      key={state.id}
                      type="button"
                      className="bg-white rounded-full border-2 border-[#337CE5]"
                    >
                      <div className="max-w-sm">
                        <figure className="py-3">
                          <blockquote className="font-light text-gray-700 sm:text-lg dark:text-gray-700">
                            {state.state_name}
                          </blockquote>
                        </figure>
                      </div>
                    </button>
                  ))}
                </div>{' '}
                <div className="flex flex-row space-x-4 justify-center items-end	">
                  <figure className="mt-6">
                    <blockquote className="text-center font-light text-gray-700 lg:mb-0 sm:text-lg dark:text-gray-700">
                      <button
                        type="button"
                        onClick={toReg}
                        className="text-lg font-semibold text-[#337CE5]"
                      >
                        Зарегистрируйтесь <span aria-hidden="true">→</span>
                      </button>

                      <br />
                      <p className="mt-1 text-center  max-w-full text-sm leading-6 text-gray-500">
                        чтобы увидеть подробную информацию
                      </p>
                    </blockquote>
                  </figure>
                </div>
              </div>
            </>
          ) : (
            showImage && (
              <div className="mt-10 lg:mt-4 rounded-lg border overflow-hidden box-border">
                <img
                  src="/src/assets/danny-g-htYDlrrKfuM-unsplash_YkeYSQqD.webp"
                  alt="laptop_picture"
                  className="w-full h-auto"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
