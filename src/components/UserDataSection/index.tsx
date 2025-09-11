import useAuth from "../../context/Auth/useAuth";
import { api } from "../../services/api";
import { UserDataSectionContainer } from "./styles";

const UserDataSection = () => {
  const { user } = useAuth();
  //${api.defaults.baseURL}${user.avatar}
  //http://localhost:3333/uploads/imagem
  return (
    <UserDataSectionContainer>
      <div>
        <img
          src={
            user?.avatar ? `${api.defaults.baseURL}${user.avatar}` : undefined
          }
          alt={`Avatar de ${user?.name}`}
        />
        <h2>Bem vindo! {user?.name}</h2>
      </div>
      
      <h3>Seus dados cadastrados:</h3>
      <p>Número: {user?.phone}</p>
      <p>E-mail: {user?.email}</p>
    </UserDataSectionContainer>
  );
};

export default UserDataSection;
