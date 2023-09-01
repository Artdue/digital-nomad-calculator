
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import axios  from 'axios';
import type { Istate }  from '../../Types/types';



const getAdmin = createAsyncThunk<Istate>('admin/getStates', async () => {
  const response: AxiosResponse<Istate> = await axios.get('http://localhost:3000/admin');
  return response.data;
});

export default getAdmin;