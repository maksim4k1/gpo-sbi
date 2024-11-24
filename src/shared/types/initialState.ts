export interface AuthState {
    isAuth: boolean;
    token: string,
    tokenType: string,
  }
  
  export interface InitialState {
    authReducer: AuthState;
  }
  
  export type ReducersNames = Record<keyof InitialState, string>;
  