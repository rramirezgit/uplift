import { createSlice } from '@reduxjs/toolkit';

export type authState = {
  status: 'authenticated' | 'checking' | 'not-authenticated';
  uid: string;
  email: string;
  displayName: string;
  errorMessage: string;
};

const initialState: authState = {
  status: 'not-authenticated',
  uid: '',
  email: '',
  displayName: '',
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,
  reducers: {
    login: (state) => {
      state.status = 'authenticated';
      // state.uid = payload.uid;
      // state.email = payload.email;
      // state.displayName = payload.displayName;
      state.errorMessage = '';
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'; 
      state.uid = "";
      state.email = "";
      state.displayName = "";
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
