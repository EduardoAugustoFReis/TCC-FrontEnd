import { useNavigate } from "react-router-dom";
import useAuth from "../../../context/Auth/useAuth";
import { MenuHeaderContainer } from "./styles";
//import { BsList } from "react-icons/bs";

const MenuHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleNewEmployee = () => {
    navigate("/new-employee");
  };

  const handleNewService = () => {
    navigate("/new-service");
  };

  return (
    <MenuHeaderContainer>
      {user?.role === "admin" && (
        <button onClick={handleNewEmployee}>Cadastre um funcionário</button>
      )}
      {user?.role === "admin" && (
        <button onClick={handleNewService}>Cadastre um seviço</button>
      )}
      <button onClick={handleLogout}>Logout</button>
    </MenuHeaderContainer>
  );
};

export default MenuHeader;
