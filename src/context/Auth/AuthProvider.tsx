import { useState, type ReactNode } from "react";
import { AuthContext } from "./authContext";
import type { ILoginResponse, IUser } from "../../types";
import { api } from "../../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  // inicia o estado verificando se já existe esse usuário no localStorage, se não começa com null
  const [user, setUser] = useState<IUser | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; user: IUser | null }> => {
    setLoading(true);
    try {
      // retorna um "user" e o token
      const response = await api.post<ILoginResponse>("/login", { email, password });

      // pego o "user" e o token da "data"
      const { user: loggedUser, token } = response.data;

      // coloca no localstorage
      localStorage.setItem("token", token); 
      localStorage.setItem("user", JSON.stringify(loggedUser));

      // atualiza o estado com os dados do usuário
      setUser(loggedUser);

      return { success: true, user: loggedUser };
    } catch (error) {
      console.error("Erro ao fazer login", error);
      return { success: false, user: null };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
