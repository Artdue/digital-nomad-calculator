import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useAppSelector } from '../../Redux/hooks';

function Profile() {
  const profile = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;

  const [uploadResponse1, setUploadResponse1] = useState(null);
  const [uploadResponse2, setUploadResponse2] = useState(null);
  const [uploadResponse3, setUploadResponse3] = useState(null);

  const handleFileUpload = async (file, type) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `http://localhost:3000/profile/${userData.id}/${type}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            withCredentials: true,
          },
        },
      );
      const result = await response.data.msg;
      console.log('result====>', result);
      if (type === 'lease') {
        // setUploadResponse1(`Справка успешно загружена`);
        setUploadResponse1(`✅`);

        console.log(`Файл типа ${type} успешно загружен на сервер`);
      } else if (type === 'balance') {
        // setUploadResponse2(`Выписка успешно загружена`);
        setUploadResponse2(`✅`);

        console.log(`Файл типа ${type} успешно загружен на сервер`);
      } else {
        // setUploadResponse3(`Паспорт успешно загружен`);
        setUploadResponse3(`✅`);

        console.log(`Файл типа ${type} успешно загружен на сервер`);
      }
    } catch (error) {
      console.error(`Ошибка при загрузке файла ${type}:`, error.response);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8 p-8 max-w-4xl justify-center items-center flex-col block rounded-lg bg-white shadow-md dark:bg-neutral-700">
        <div className="px-4 sm:px-0 text-center ">
          {' '}
          <h1 className="text-2xl font-bold mb-4">Форма загрузки документов</h1>
          <div className="mt-6 ">
            <div className="mb-4">
              <form
                className="w-full py-1 px-2 rounded-md"
                onSubmit={(e) => {
                  e.preventDefault();
                  const file = e.target.elements.passportFile.files[0];
                  handleFileUpload(file, 'passport');
                }}
              >
                <label className="text-center block mb-1 s text-md font-medium leading-6 text-gray-900 mt-2">
                  Загрузите паспорт
                </label>
                <input type="file" name="passportFile" className="mb-2 border rounded-md mr-2" />

                <button
                  type="submit"
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загрузить
                </button>
                <span>{uploadResponse3}</span>
              </form>
            </div>
            <div className="mb-4">
              <form
                className="w-full py-1 px-2 rounded-md"
                onSubmit={(e) => {
                  e.preventDefault();
                  const file = e.target.elements.balanceFile.files[0];
                  handleFileUpload(file, 'balance');
                }}
              >
                <label className="text-center block mb-1 s text-md font-medium leading-6 text-gray-900 mt-2">
                  Загрузите банковскую выписку
                </label>
                <input type="file" name="balanceFile" className="mb-2 border rounded-md mr-2" />
                <button
                  type="submit"
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загрузить
                </button>
                <span>{uploadResponse2}</span>
              </form>
            </div>
            <div>
              <form
                className="w-full py-1 px-2 rounded-md"
                onSubmit={(e) => {
                  e.preventDefault();
                  const file = e.target.elements.leaseFile.files[0];
                  handleFileUpload(file, 'lease');
                }}
              >
                <label className="text-center block mb-1 rounded-md text-md font-medium leading-6 text-gray-900 mt-2">
                  Загрузите справку о работе
                </label>
                <input type="file" name="leaseFile" className="mb-2 border rounded-md mr-2 " />
                <button
                  type="submit"
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загрузить
                </button>
                <span>{uploadResponse1}</span>
              </form>
            </div>{' '}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
