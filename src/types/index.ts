export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  role : "admin" | "barbeiro" | "cliente"
};

export interface ILoginResponse {
  user: IUser;
  token: string;
}