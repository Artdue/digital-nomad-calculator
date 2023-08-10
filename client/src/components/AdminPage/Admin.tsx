import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Types/types';
import { getAdmin } from '../../Redux/thunks/getAdmin';
import { addState } from '../../Redux/thunks/addStates';
import { deleteState } from '../../Redux/thunks/deleteState';
import { editState } from '../../Redux/thunks/editState';

function AdminStates(): React.JSX.Element {
  const states = useSelector((state: RootState) => state.adminSlice.states);
  const dispatch = useDispatch();

  const [stateName, setStateName] = useState<string>('');
  const [minIncome, setMinIncome] = useState<string>('');
  const [bannedCitizenship, setBannedCitizenship] = useState<string>('');
  const [workExp, setWorkExp] = useState<string>('');
  const [minAge, setMinAge] = useState<string>('');
  const [maxAge, setMaxAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [criminal, setCriminal] = useState<boolean>(false);

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
    } catch (error) {
      console.error('Ошибка при добавлении данных:', error);
    }
  };

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
      });
    } catch (error) {
      console.error('Ошибка при редактировании данных:', error);
    }
  };

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

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
      });
    }
  }, [editingStateId, states]);

  return (
    <div>
      <h2>Список государств</h2>
      <ul>
        {states.map((state) => (
          <li key={state.id}>
            {editingStateId === state.id ? (
              <div>
                <input
                  type="text"
                  defaultValue={editedFields.state_name}
                  placeholder="Название"
                  onChange={(e) => setEditedFields({ ...editedFields, state_name: e.target.value })}
                />
                <input
                  type="number"
                  value={editedFields.min_income}
                  placeholder="Минимальный доход"
                  onChange={(e) => setEditedFields({ ...editedFields, min_income: e.target.value })}
                />
                <input
                  type="text"
                  value={editedFields.banned_citizenship}
                  placeholder="Нельзя с гражданством"
                  onChange={(e) =>
                    setEditedFields({ ...editedFields, banned_citizenship: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editedFields.work_exp}
                  placeholder="Опыт работы"
                  onChange={(e) => setEditedFields({ ...editedFields, work_exp: e.target.value })}
                />
                <input
                  type="number"
                  value={editedFields.min_age}
                  placeholder="Минимальный возраст"
                  onChange={(e) => setEditedFields({ ...editedFields, min_age: e.target.value })}
                />
                <input
                  type="number"
                  value={editedFields.max_age}
                  placeholder="Максимальный возраст"
                  onChange={(e) => setEditedFields({ ...editedFields, max_age: e.target.value })}
                />
                <input
                  type="text"
                  value={editedFields.gender}
                  placeholder="Пол"
                  onChange={(e) => setEditedFields({ ...editedFields, gender: e.target.value })}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={editedFields.criminal}
                    onChange={(e) =>
                      setEditedFields({ ...editedFields, criminal: e.target.checked })
                    }
                  />
                  Судимость
                </label>
                <button onClick={() => handleEditState(state.id)}>Сохранить</button>
              </div>
            ) : (
              <div>
                Название страны: {state.state_name}
                (Мин. доход: {state.min_income}) (Нельзя с гражданством: {state.banned_citizenship})
                (Опыт работы: {state.work_exp}) (Мин. возраст: {state.min_age}) (Макс. возраст:{' '}
                {state.max_age}) (Пол: {state.gender}) (Судимость: {state.criminal})
                <button onClick={() => setEditingStateId(state.id)}>Редактировать</button>
                <button onClick={() => dispatch(deleteState(state.id))}>Удалить</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <h2>Добавить государство</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Название"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Минимальный доход"
            value={minIncome}
            onChange={(e) => setMinIncome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Нельзя с гражданством"
            value={bannedCitizenship}
            onChange={(e) => setBannedCitizenship(e.target.value)}
          />
          <input
            type="number"
            placeholder="Опыт работы"
            value={workExp}
            onChange={(e) => setWorkExp(e.target.value)}
          />
          <input
            type="number"
            placeholder="Минимальный возраст"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
          />
          <input
            type="number"
            placeholder="Максимальный возраст"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Пол"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={criminal}
              onChange={(e) => setCriminal(e.target.checked)}
            />
            Судимость
          </label>
          <button onClick={handleAddState}>Добавить</button>
        </form>
      </div>
    </div>
  );
}

export default AdminStates;
