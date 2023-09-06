import type store from '../Redux/store';

type Istates = {
  id: number;
  state_name: string;
  min_income: number;
  banned_citizenship: string;
  work_exp: number;
  min_age: number;
  max_age: number;
  gender: string;
  criminal: boolean;
  visaType: string;
  visaTerm: number;
  visaShare: string;
  actions: string;
  createdAt: object;
  updatedAt: object;
};

type IInputs = {
  income: string;
  work_exp: string;
  citizenship: string;
};

type IInputs2 = {
  income: number;
  employmentDate: string;
  citizenship: string;
};

type IUsers = {
  id: number;
  login: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  password: string;
  subscribed: boolean;
  birthDate: string;
  phoneNumber: string;
  passport: string;
  balance: string;
  lease: string;
  citizenship: string;
  income: number;
  work_exp: number;
  work_date: string;
  document_status: string;
  appStatus: boolean;
  admin: boolean;
  visaType: string;
  visaTerm: number;
  visaShare: string;
  createdAt: object;
  updatedAt: object;
};

type IEditUserInputs = {
  id: number;
  citizenship: string;
  income: number;
  work_exp: number;
  work_date: string;
  visaType: string;
  visaShare: string;
};

type IEditUserInputs2 = {
  id: number;
  first_name: string;
  second_name: string;
  last_name: string;
  birthDate: string;
  phone: string;
  citizenship: string;
  income: number;
  work_exp: number;
  work_date: string;
  visaType: string;
  visaShare: string;
  appStatus: boolean;
  document_status: string;
};

type IuserInputs = {
  income: number;
  employmentDate: string;
  citizenship: string;
  visaT: string | undefined;
  visaS: string | undefined;
};

type IuserEditInputs = {
  id: number;
  appStatus: boolean;
  document_status: string;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type {
  Istates,
  IInputs,
  IUsers,
  IEditUserInputs,
  IuserInputs,
  IInputs2,
  IEditUserInputs2,
  IuserEditInputs,
};
