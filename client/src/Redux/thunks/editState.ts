import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { Istate } from '../../Types/types';

const editState = createAsyncThunk('admin/editState', async (editedFields: Istate) => {
  const response: AxiosResponse<Istate[]> = await axios.put(
    `http://localhost:3000/admin/${editedFields.id}`,
    editedFields,
  );
  return response.data;
  
});

export default editState;
