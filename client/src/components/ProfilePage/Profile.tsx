import React, { useState } from 'react';
import axios from 'axios';
import { useAppSelector } from '../../Redux/hooks';

function Profile() {
  const profile = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;

  const handleFileUpload = async (file, type) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(`http://localhost:3000/profile/${userData.id}/${type}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          withCredentials: true,
        },
      });
      console.log(`Файл типа ${type} успешно загружен на сервер`);
    } catch (error) {
      console.error(`Ошибка при загрузке файла ${type}:`, error.response);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md dark:bg-neutral-700">
      <h1 className="text-xl font-bold mb-4">Профиль пользователя</h1>
      <div className="mb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const file = e.target.elements.passportFile.files[0];
            handleFileUpload(file, 'passport');
          }}
        >
          <label className="block mb-1">Загрузите паспорт:</label>
          <input type="file" name="passportFile" className="mb-2" />
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Загрузить
          </button>
        </form>
      </div>
      <div className="mb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const file = e.target.elements.balanceFile.files[0];
            handleFileUpload(file, 'balance');
          }}
        >
          <label className="block mb-1">Загрузите банковскую выписку:</label>
          <input type="file" name="balanceFile" className="mb-2" />
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Загрузить
          </button>
        </form>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const file = e.target.elements.leaseFile.files[0];
            handleFileUpload(file, 'lease');
          }}
        >
          <label className="block mb-1">Загрузите справку о работе:</label>
          <input type="file" name="leaseFile" className="mb-2" />
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Загрузить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
