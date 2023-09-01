import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import axios  from 'axios';
import type { Istate, InewState } from '../../Types/types';


 const addState = createAsyncThunk<Istate, InewState>('admin/addState', async (newState) => {
    const response: AxiosResponse<Istate>  = await axios.post('http://localhost:3000/admin', newState);    
    return response.data;

});
export default addState;