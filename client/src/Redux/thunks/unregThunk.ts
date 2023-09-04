import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IInputs2 } from '../../Types/calcTypes';

export const unregtUserGet = createAsyncThunk('unregtUser', async (res: IInputs2) => res);

export const regtUserGet = createAsyncThunk('regtUser', async (res) => res);
