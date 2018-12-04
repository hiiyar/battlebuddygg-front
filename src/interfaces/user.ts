export interface IUser {
  id: string;
  email: string;
  name: string;
}

export interface ILoginResponse {
  login: {
    user: IUser;
    token: string;
  };
}
