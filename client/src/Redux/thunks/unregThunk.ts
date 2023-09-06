import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IuserInputs } from '../../Types/calcTypes';

export const unregtUserGet = createAsyncThunk('unregtUser', async (res: IuserInputs) => res);

export const regtUserGet = createAsyncThunk('regtUser', async (res) => res);
