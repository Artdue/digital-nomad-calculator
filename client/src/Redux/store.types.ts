import type { IUser, Istate } from '../Types/types';

export type IstateType = {
  states: Istate[];
  loading: boolean;
};

export type IprofileType = {
  profile: IUser[];
  loading: boolean;
};
