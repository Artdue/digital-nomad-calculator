import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { IstateData } from '../store.types';
import type { IUser } from '../../Types/types';

const editUser = createAsyncThunk<IUser[], IstateData>(
  'admin/editState',
  async (stateData: IstateData) => {
    const { id, data } = stateData;
    const response: AxiosResponse<IUser[]> = await axios.put(
      `http://localhost:3000/admin/users/${id}`,
      data,
    );
    return response.data;
  },
);

export default editUser;
