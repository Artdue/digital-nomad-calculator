import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import axios  from 'axios';
import type { Istate } from '../../Types/types';



const deleteState = createAsyncThunk<Istate>('admin/deleteState', async (id) => {
    const response: AxiosResponse<Istate>  = await axios.delete(`http://localhost:3000/admin/${id}`);
    return response.data;
});
export default deleteState;



