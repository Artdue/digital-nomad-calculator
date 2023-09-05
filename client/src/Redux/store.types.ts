import type { IUser, Istate } from '../Types/types';

export type IstateType = {
  states: Istate[];
  loading: boolean;
};

export type IprofileType = {
  profile: IUser;
  loading: boolean;
};

export type IUserType = {
  users: IUser[];
  loading: boolean;
};

export type IInitialState = {
  email?: string | undefined;
  admin?: boolean | undefined;
  auth?: boolean | undefined;
  msg?: string | undefined;
};

export type IstateData = {
  data: object;
  id: number;
};

export type IError = {
  status: string;
  error: string;
};
