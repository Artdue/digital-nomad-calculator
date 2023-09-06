import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { useAppSelector } from '../../Redux/hooks';

type UploadResponse = string | null;

function Profile(): React.JSX.Element {
  const profile = useAppSelector((state) => state.profileSlice);
  const userData = profile.profile;

  const [uploadResponse1, setUploadResponse1] = useState<UploadResponse>(null);
  const [uploadResponse2, setUploadResponse2] = useState<UploadResponse>(null);
  const [uploadResponse3, setUploadResponse3] = useState<UploadResponse>(null);

  const handleFileUpload = async (file: File | null, type: string): Promise<void> => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response: AxiosResponse<{ msg: string }> = await axios.post(
          `http://localhost:3000/profile/${userData.id}/${type}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              withCredentials: true,
            },
          },
        );

        const result = response.data.msg;
        console.log('result====>', result);

        if (type === 'lease') {
          setUploadResponse1(`✅`);
        } else if (type === 'balance') {
          setUploadResponse2(`✅`);
        } else {
          setUploadResponse3(`✅`);
        }
      } catch (error) {
        console.error(`Ошибка при загрузке файла ${type}:`);
      }
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>, type: string): void => {
    const file = e.target.files?.[0] || null;
    void handleFileUpload(file, type);
  };

  return (
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
              }}
            >
              <span className="text-center block mb-1 s text-md font-medium leading-6 text-gray-900 mt-2">
                Загрузите паспорт
              </span>
              <input
                type="file"
                name="passportFile"
                className="mb-2 border rounded-md mr-2"
                onChange={(e) => handleFileInputChange(e, 'passport')}
              />

              {uploadResponse3 ? (
                <button
                  type="button"
                  style={{ width: '100px' }}
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-green-700 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загружено
                </button>
              ) : (
                <button
                  type="submit"
                  style={{ width: '100px' }}
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загрузить
                </button>
              )}
            </form>
          </div>
          <div className="mb-4">
            <form
              className="w-full py-1 px-2 rounded-md"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <span className="text-center block mb-1 s text-md font-medium leading-6 text-gray-900 mt-2">
                Загрузите банковскую выписку
              </span>
              <input
                type="file"
                name="balanceFile"
                className="mb-2 border rounded-md mr-2"
                onChange={(e) => handleFileInputChange(e, 'balance')}
              />
              {uploadResponse2 ? (
                <button
                  type="button"
                  style={{ width: '100px' }}
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загружено
                </button>
              ) : (
                <button
                  type="submit"
                  style={{ width: '100px' }}
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загрузить
                </button>
              )}
            </form>
          </div>
          <div>
            <form
              className="w-full py-1 px-2 rounded-md"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <span className="text-center block mb-1 rounded-md text-md font-medium leading-6 text-gray-900 mt-2">
                Загрузите справку о работе
              </span>
              <input
                type="file"
                name="leaseFile"
                className="mb-2 border rounded-md mr-2 "
                onChange={(e) => handleFileInputChange(e, 'lease')}
              />
              {uploadResponse1 ? (
                <button
                  type="button"
                  style={{ width: '100px' }}
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загружено
                </button>
              ) : (
                <button
                  type="submit"
                  style={{ width: '100px' }}
                  className="m-2 mt-4 px-4 py-2 text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center mr-2"
                >
                  Загрузить
                </button>
              )}
              <p>Поддерживаемые типы файлов: PDF, TXT, DOCX, JPG, JPEG, IMG, PNG</p>
            </form>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}

export default Profile;
