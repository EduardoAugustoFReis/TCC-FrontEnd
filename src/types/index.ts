export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  role : "admin" | "barbeiro" | "cliente";
  avatar: string | null;
};

export interface ILoginResponse {
  user: IUser;
  token: string;
}