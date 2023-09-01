import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IInput2 } from '../../Types/types';

export const unregtUserGet = createAsyncThunk('unregtUser', async (res: IInput2) => res);

export const regtUserGet = createAsyncThunk('regtUser', async (res) => res);
