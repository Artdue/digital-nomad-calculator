import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Types/types';
import { getAdmin } from '../../Redux/thunks/getAdmin';
import { addState } from '../../Redux/thunks/addStates';
import { deleteState } from '../../Redux/thunks/deleteState';
import { editState } from '../../Redux/thunks/editState';
import NewState from './NewState';
// import './Admin.css';

function AdminStates(): React.JSX.Element {
  const [showForm, setShowForm] = useState(false);
  // const formRef = useRef(null);
  const states = useSelector((state: RootState) => state.adminSlice.states);

  const dispatch = useDispatch();
  // const [stateName, setStateName] = useState<string>('');
  // const [minIncome, setMinIncome] = useState<string>('');
  // const [bannedCitizenship, setBannedCitizenship] = useState<string>('');
  // const [workExp, setWorkExp] = useState<string>('');
  // const [minAge, setMinAge] = useState<string>('');
  // const [maxAge, setMaxAge] = useState<string>('');
  // const [gender, setGender] = useState<string>('');
  // const [criminal, setCriminal] = useState<boolean>(false);

  // const handleAddState = async () => {
  //   const newState = {
  //     state_name: stateName,
  //     min_income: Number(minIncome),
  //     banned_citizenship: bannedCitizenship,
  //     work_exp: Number(workExp),
  //     min_age: Number(minAge),
  //     max_age: Number(maxAge),
  //     gender,
  //     criminal,
  //   };
  //   try {
  //     void dispatch(addState(newState));
  //     setStateName('');
  //     setMinIncome('');
  //     setBannedCitizenship('');
  //     setWorkExp('');
  //     setMinAge('');
  //     setMaxAge('');
  //     setGender('');
  //     setCriminal(false);
  //   } catch (error) {
  //     console.error('Ошибка при добавлении данных:', error);
  //   }
  // };

  const handleDeleteState = async (id: number) => {
    try {
      void dispatch(deleteState(id));
      void dispatch(getAdmin());
    } catch (error) {
      console.error('Ошибка при удалении данных:', error);
    }
  };

  const [editingStateId, setEditingStateId] = useState<number | null>(null);
  const [editedFields, setEditedFields] = useState({
    state_name: '',
    min_income: '',
    banned_citizenship: '',
    work_exp: '',
    min_age: '',
    max_age: '',
    gender: '',
    criminal: false,
    visaType: '',
    visaTerm:'',
    visaShare:'',
    actions:'',
  });

  const handleEditState = async (id: number) => {
    try {
      dispatch(editState({ id, data: editedFields }));
      setEditingStateId(null);
      setEditedFields({
        state_name: '',
        min_income: '',
        banned_citizenship: '',
        work_exp: '',
        min_age: '',
        max_age: '',
        gender: '',
        criminal: false,
        visaType: '',
        visaTerm:'',
        visaShare:'',
        actions:'',
      });
    } catch (error) {
      console.error('Ошибка при редактировании данных:', error);
    }
  };

  // const handleFormToggle = () => {
  //   setShowForm(!showForm);

  //   if (!showForm && formRef.current) {
  //     formRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };

  useEffect(() => {
    dispatch(getAdmin());
  }, []);

  useEffect(() => {
    if (editingStateId !== null) {
      // Найдите состояние, которое редактируется
      const editingState = states.find((state) => state.id === editingStateId);

      // Заполните состояние editedFields данными для предзаполнения
      setEditedFields({
        state_name: editingState.state_name,
        min_income: editingState.min_income.toString(),
        banned_citizenship: editingState.banned_citizenship,
        work_exp: editingState.work_exp.toString(),
        min_age: editingState.min_age.toString(),
        max_age: editingState.max_age.toString(),
        gender: editingState.gender,
        criminal: editingState.criminal,
        visaType: editingState.visaType,
        visaTerm:editingState. visaTerm,
        visaShare:editingState.visaShare,
        actions:editingState.actions
      });
    } else {
      // Если не редактируется, сбросьте editedFields
      setEditedFields({
        state_name: '',
        min_income: '',
        banned_citizenship: '',
        work_exp: '',
        min_age: '',
        max_age: '',
        gender: '',
        criminal: false,
        visaType: '',
        visaTerm:'',
        visaShare:'',
        actions:''
      });
    }
  }, [editingStateId, states]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mb-8">
        <br /> Добро пожаловать, Админ
      </h1>
      <NewState />
      <div className="grid justify-center">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3">
          {states.map((state) => (
            <div key={state.id} className="flex items-stretch">
              {editingStateId === state.id ? (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded-md ">
                    <h2 className="text-lg font-semibold mb-4 text-center">
                      Редактирование государства
                    </h2>
                    <div className="space-y-2 flex flex-col items-center">
                      <input
                        type="text"
                        className="mt-1 text-sm text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
                        defaultValue={editedFields.state_name}
                        placeholder="Название"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, state_name: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        className="mt-1 text-sm text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
                        value={editedFields.min_income}
                        placeholder="Минимальный доход"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, min_income: e.target.value })
                        }
                      />
                    <select
                    id="banned_citizenship"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    value={editedFields.banned_citizenship}
                    onChange={(e) =>
                      setEditedFields({ ...editedFields, banned_citizenship: e.target.value })}
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
                      <input
                        type="number"
                        className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                        value={editedFields.work_exp}
                        placeholder="Опыт работы"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, work_exp: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                        value={editedFields.min_age}
                        placeholder="Минимальный возраст"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, min_age: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                        value={editedFields.max_age}
                        placeholder="Максимальный возраст"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, max_age: e.target.value })
                        }
                      />
                      {/* <input
                        type="text"
                        className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                        value={editedFields.gender}
                        placeholder="Пол"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, gender: e.target.value })
                        }
                      /> */}
                      <select
                    id="visaType"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    value={editedFields.visaType}
                    onChange={(e) =>
                      setEditedFields({ ...editedFields, visaType: e.target.value })}
                  >
                    <option value="">Выберите тип визы</option>
                    <option value="ВНЖ">ВНЖ</option>
                    <option value="Виза">Виза</option>
                  </select>
                  <input
                        type="number"
                        className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                        value={editedFields.visaTerm}
                        placeholder="Максимальный срок визы"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, visaTerm: e.target.value })
                        }
                      />
            <select
                    id="visaShare"
                    className="mt-1 text-sm text-gray-700 sm:col-span-1 focus:ring focus:ring-blue-300 focus:outline-none"
                    value={editedFields.visaShare}
                    onChange={(e) =>
                      setEditedFields({ ...editedFields, visaShare: e.target.value })}
                  >
                    <option value="">Выберите </option>
                    <option value="Персональная">Персональная</option>
                    <option value="Семейная">Семейная</option>
                  </select>
                  <input
                        type="text"
                        className="mt-1 text-sm text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
                        defaultValue={editedFields.actions}
                        placeholder="Действия"
                        onChange={(e) =>
                          setEditedFields({ ...editedFields, actions: e.target.value })
                        }
                      />
                  <label>
                        <input
                          type="checkbox"
                          className="mt-1 text-sm text-gray-700 sm:col-span-2 focus:ring focus:ring-blue-300 focus:outline-none"
                          checked={editedFields.criminal}
                          onChange={(e) =>
                            setEditedFields({ ...editedFields, criminal: e.target.checked })
                          }
                        />
                        Судимость
                      </label>
                      <button onClick={() => handleEditState(state.id)}>Сохранить</button>
                      <button onClick={() => setEditingStateId(null)}>Отмена</button>
                    </div>
                  </div>
                </div>
              ) : (
                <section className="bg-white dark:bg-gray-900">
                  <div className="w-full">
                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl h-full flex flex-col">
                      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                        {state.state_name}
                      </h1>
                      {/* <p className="text-gray-500 dark:text-gray-300">
                        Мин. доход: {state.min_income}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Нельзя с гражданством: {state.banned_citizenship}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Опыт работы: {state.work_exp}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Мин. возраст: {state.min_age}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Макс. возраст: {state.max_age}
                      </p>
                      <p className="text-gray-500 dark:text-gray-300">Пол: {state.gender}</p>
                      <p className="text-gray-500 dark:text-gray-300">
                        Судимость: {state.criminal}
                      </p> */}
                      <div className="mt-auto">
                        <button
                          type="button"
                          onClick={() => setEditingStateId(state.id)}
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Редактировать
                        </button>

                        <button
                          type="button"
                          onClick={() => dispatch(deleteState(state.id))}
                          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminStates;
