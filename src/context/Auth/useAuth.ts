import { useContext } from "react"
import { AuthContext } from "./authContext"

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Esse contexto não pode ser usado sem o provider respectivo");
  }

  return context
}