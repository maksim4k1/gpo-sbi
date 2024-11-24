import { initialState as globalInitialState, reducers } from "@/shared/data/index"
import {type LoginResponseData } from "@/shared/types/api/auth";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type AuthState} from "@/shared/types/initialState"
const initialState: AuthState = globalInitialState.authReducer;

const authSlice = createSlice({
  name: reducers.authReducer,
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<LoginResponseData>) => {
      const {token,tokenType} = payload;
      state.token = token;
      state.tokenType = tokenType;
      state.isAuth = true;
    },

    logout: (state) => {
      state.isAuth = false;
      state.token ="";
      state.tokenType = "";
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;