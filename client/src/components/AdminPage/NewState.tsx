import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addState } from '../../Redux/thunks/addStates';

export default function NewState() {
  const formRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const [stateName, setStateName] = useState<string>('');
  const [minIncome, setMinIncome] = useState<string>('');
  const [bannedCitizenship, setBannedCitizenship] = useState<string>('');
  const [workExp, setWorkExp] = useState<string>('');
  const [minAge, setMinAge] = useState<string>('');
  const [maxAge, setMaxAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [criminal, setCriminal] = useState<boolean>(false);
  const [visaType, setVisaType] = useState<string>('');
  const [visaTerm, setVisaTerm] = useState<string>('');
  const [visaShare, setVisaShare] = useState<string>('');
  const [actions, setActions] = useState<string>('');

  const handleAddState = async () => {
    const newState = {
      state_name: stateName,
      min_income: Number(minIncome),
      banned_citizenship: bannedCitizenship,
      work_exp: Number(workExp),
      min_age: Number(minAge),
      max_age: Number(maxAge),
      gender,
      criminal,
      visaType,
      visaTerm,
      visaShare,
      actions
    };
    try {
      void dispatch(addState(newState));
      setStateName('');
      setMinIncome('');
      setBannedCitizenship('');
      setWorkExp('');
      setMinAge('');
      setMaxAge('');
      setGender('');
      setCriminal(false);
      setVisaType('');
      setVisaTerm('');
      setVisaShare('');
      setActions('');
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  };
  return (
    <>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => {
            setShowForm(!showForm);
          }}
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Добавление данных в калькулятор
        </button>
      </div>
      {showForm && (
 <div className="flex justify-center items-center h-screen">
 <div ref={formRef} className="border-2 p-4 w-full max-w-lg mx-auto">
   <div className="px-4 sm:px-0" />

   <div className="mt-6 border-t border-gray-100">
     <form onSubmit={(e) => e.preventDefault()} className="divide-y divide-gray-100">
       <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
         <label
           className="text-sm font-medium leading-6 text-gray-900"
           htmlFor="stateName"
         >
           Название государства
         </label>
         <input
           id="stateName"
           type="text"
           className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
           placeholder=""
           value={stateName}
           onChange={(e) => setStateName(e.target.value)}
         />
       </div>

       <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="banned_citizenship">
                Нельзя с гражданством
                  </label>
                  <select
                    id="banned_citizenship"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    value={bannedCitizenship}
                    onChange={(e) =>  setBannedCitizenship(e.target.value)}
                  >
                    <option value="">Выберите </option>
                    <option value="RU">RU - гражданин РФ</option>
                <option value="UKR">UKR - гражданин Украины</option>
                <option value="KZ">KZ - гражданин Казахстана</option>
                <option value="UZ">UZ - гражданин Узбекистана</option>
                <option value="TJ">TJ - гражданин Таджикистана</option>
                <option value="AZ">AZ - гражданин Азербайджана</option>
                <option value="MD">MD - гражданин Молдавии</option>
                <option value="BY">BY - гражданин Беларуси</option>
                <option value="AM">AM - гражданин Армении</option>
                <option value="KG">KG - гражданин Киргизии</option>
                <option value="TM">TM - гражданин Туркменистана</option>
                  </select>
                </div>


                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label
                    className="text-sm font-medium leading-6 text-gray-900"
                    htmlFor="minIncome"
                  >
                    Минимальный доход
                  </label>
                  <input
                    id="minIncome"
                    type="number"
                    className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder=""
                    value={minIncome}
                    onChange={(e) => setMinIncome(e.target.value)}
                  />
                </div>
                {/* <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="gender">
                    Пол
                  </label>
                  <select
                    id="gender"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Выберите пол</option>
                    <option value="male">Мужчина</option>
                    <option value="female">Женщина</option>
                    <option value="other">Другое</option>
      
                   </select> 
                </div> */}
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="workExp">
                    Опыт работы
                  </label>
                  <input
                    id="workExp"
                    type="number"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder=""
                    value={workExp}
                    onChange={(e) => setWorkExp(e.target.value)}
                  />
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="minAge">
                    Минимальный возраст
                  </label>
                  <input
                    id="minAge"
                    type="number"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder=""
                    value={minAge}
                    onChange={(e) => setMinAge(e.target.value)}
                  />
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="maxAge">
                    Максимальный возраст
                  </label>
                  <input
                    id="maxAge"
                    type="number"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder=""
                    value={maxAge}
                    onChange={(e) => setMaxAge(e.target.value)}
                  />
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="visaType">
                  Выберите тип визы
                  </label>
                  <select
                    id="visaType"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    value={visaType}
                    onChange={(e) =>  setVisaType(e.target.value)}
                  >
                    <option value="">Выберите тип визы</option>
                    <option value="ВНЖ">ВНЖ</option>
                    <option value="Виза">Виза</option>
                  </select>
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="visaTerm">
                    Максимальный срок визы/ВНЖ
                  </label>
                  <input
                    id="visaTerm"
                    type="number"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder=""
                    value={visaTerm}
                    onChange={(e) => setVisaTerm(e.target.value)}
                  />
                </div>
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="visaShare">
                  Семейная?
                  </label>
                  <select
                    id="visaShare"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    value={visaShare}
                    onChange={(e) =>  setVisaShare(e.target.value)}
                  >
                    <option value="">Выберите </option>
                    <option value="Персональная">Персональная</option>
                    <option value="Семейная">Семейная</option>
                  
                  </select>
                </div>


                <div className="px-4 py-3 sm:flex sm:items-center sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="criminal">
                    С судимостью нельзя
                  </label>
                  <input
                    id="criminal"
                    type="checkbox"
                    className="mt-1 text-sm text-gray-700 sm:ml-2 focus:ring focus:ring-blue-300"
                    checked={criminal}
                    onChange={(e) => setCriminal(e.target.checked)}
                  />
                </div>
                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label
                    className="text-sm font-medium leading-6 text-gray-900"
                    htmlFor="stateName"
                  >
                    Действия
                  </label>
                  <input
                    id="actions"
                    type="text"
                    className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="Действия"
                    value={ actions}
                    onChange={(e) =>  setActions(e.target.value)}
                  />
                </div>
                {/* Кнопка "Добавить" */}
                <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <div className="sm:col-span-2 flex justify-end">
                    <button
                      onClick={handleAddState}
                      className="px-8 py-1 ml-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
