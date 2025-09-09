import { useNavigate } from "react-router-dom";
import useAuth from "../../context/Auth/useAuth";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleNewBarber = () => {
    navigate("/new-employee");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>Home</h1>
      <p>Bem vindo {user?.name}</p>
      <p>Seu número: {user?.phone}</p>
      <p>Seu E-mail: {user?.email}</p>
      {user?.role === "admin" && (
        <button onClick={handleNewBarber}>Cadastre um novo barbeiro</button>
      )}
    </div>
  );
};

export default Home;
