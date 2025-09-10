import useAuth from "../../context/Auth/useAuth";
import { UserDataSectionContainer } from "./styles"

const UserDataSection = () => {
  const { user } = useAuth();

  return (
    <UserDataSectionContainer>
      <h2>Bem vindo! {user?.name}</h2>
      <h3>Seus dados cadastrados:</h3>
      <p>Número: {user?.phone}</p>
      <p>E-mail: {user?.email}</p>
    </UserDataSectionContainer>
  )
}

export default UserDataSection
