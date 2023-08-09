import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const handleFileUpload = async (file, type) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post(`http://localhost:3000/profile/${type}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(`Файл типа ${type} успешно загружен на сервер`);
    } catch (error) {
      console.error(`Ошибка при загрузке файла ${type}:`, error.response);
    }
  };

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const file = e.target.elements.passportFile.files[0];
            handleFileUpload(file, 'passport');
          }}
        >
          <label>Загрузите паспорт:</label>
          <input type="file" name="passportFile" />
          <button type="submit">Загрузить</button>
        </form>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const file = e.target.elements.balanceFile.files[0];
            handleFileUpload(file, 'balance');
          }}
        >
          <label>Загрузите банковскую выписку:</label>
          <input type="file" name="balanceFile" />
          <button type="submit">Загрузить</button>
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
          <label>Загрузите справку о работе:</label>
          <input type="file" name="leaseFile" />
          <button type="submit">Загрузить</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
