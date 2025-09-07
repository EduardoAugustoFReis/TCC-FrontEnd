import { createContext } from "react";
import type { IUser } from "../../types";

interface AuthContextProps {
  user: IUser | null;
  login: (email: string, password: string) => Promise<{ success: boolean; user: IUser | null }>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);