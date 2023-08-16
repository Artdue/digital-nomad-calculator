import { createAsyncThunk } from '@reduxjs/toolkit';

export const unregtUserGet = createAsyncThunk('unregtUser', async (res) => res);

export const regtUserGet = createAsyncThunk('regtUser', async (res) => res);
