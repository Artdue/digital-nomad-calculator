import type store from '../Redux/store';

type Istate = {
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

type IInput = {
  income: string;
  work_exp: string;
  citizenship: string;
};

export type UserType = {
  admin: boolean;
  email: string;
  password: string;
};

export type IUser = {
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

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type ILogin = {
  email: string;
  password: string;
};

export type Istates = {
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

type IInput2 = {
  income: number;
  employmentDate: string;
  citizenship: string;
  visaT: string;
  visaS: string;
};

type IEditUser = {
  id: number;
  citizenship: string;
  income: number;
  work_exp: number;
  work_date: string;
  visaType: string;
  visaShare: string;
};

export type InewState = {
  state_name: string;
  min_income: number;
  banned_citizenship: string;
  work_exp: number;
  min_age: number;
  max_age: number;
  gender: string;
  criminal: boolean;
  visaTerm: number;
  visaShare: string;
  actions: string;
}


export type { Istate, IInput, IInput2, IEditUser };
