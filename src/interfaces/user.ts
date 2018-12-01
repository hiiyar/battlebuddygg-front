export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface ILoginResponse {
  login: {
    user: IUser;
    token: string;
  };
}
