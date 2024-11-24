import { type InitialState, type ReducersNames } from "../types/initialState";

export const reducers: ReducersNames = {
  authReducer: "auth",
};

export const initialState: InitialState = {
  authReducer: {
    isAuth: false,
    token: "",
    tokenType: "",
  },
}