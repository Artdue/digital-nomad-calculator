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
  login: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  citizenship: string;
  income: string;
  work_exp: string;
  appStatus: boolean;
  document_status: string;
};

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type { Istate, IInput };
