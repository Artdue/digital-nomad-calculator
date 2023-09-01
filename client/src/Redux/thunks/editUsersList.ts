toolkit';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { IstateData } from '../store.types';

export const editUser = createAsyncThunk('admin/editState', async (stateData: IstateData) => {
  const { id, data } = stateData;
  const response: AxiosResponse<IstateData> = await axios.put(
    http://localhost:3000/admin/users/${id},
    data,
  );
  return response.data;
});