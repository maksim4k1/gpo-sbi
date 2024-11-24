export interface LoginRequestData {
    telegramId: string;
    password: string;
  }
  
  export interface LoginApiRequestData {
    telegramId: string;
    password: string;
  }
  
  export interface LoginResponseData {
    token: string;
    tokenType: string;
  }
  
  export interface LoginApiResponseData {
      token: string;
      tokenType: string;
  }