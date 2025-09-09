import useAuth from "../../context/Auth/useAuth";
import Header from "../../components/Header";
import { HomerContainer } from "./styles";

const Home = () => {
  const { user } = useAuth();

  return (
    <HomerContainer>
      <Header />
      <h1>Home</h1>
      
      <p>Bem vindo {user?.name}</p>
      <p>Seu número: {user?.phone}</p>
      <p>Seu E-mail: {user?.email}</p>
    </HomerContainer>
  );
};

export default Home;
