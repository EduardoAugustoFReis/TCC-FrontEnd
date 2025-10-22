import { useNavigate } from "react-router-dom";
import useAuth from "../../../context/Auth/useAuth";
import { BurgerButton, MenuHeaderContainer } from "./styles";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "styled-components";

const MenuHeader = () => {
  const theme = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    closeMenu();
  };

  const handleMyAccount = () => {
    navigate("/my-account");
    closeMenu();
  };

  const handleNewEmployee = () => {
    navigate("/new-employee");
    closeMenu();
  };

  const handleNewService = () => {
    navigate("/new-service");
    closeMenu();
  };

  return (
    <>
      {/* Burger fora do container para não ser transformado junto com o menu */}
      <BurgerButton
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <FiX color={theme.colors.whitePosca}/> : <FiMenu color={theme.colors.whitePosca}/>}
      </BurgerButton>

      <MenuHeaderContainer $open={open}>
        {user?.role === "admin" && (
          <button onClick={handleNewEmployee}>Cadastre um funcionário</button>
        )}
        {user?.role === "admin" && (
          <button onClick={handleNewService}>Cadastre um serviço</button>
        )}
        <button onClick={handleMyAccount}>Minha Conta</button>
        <button onClick={handleLogout}>Logout</button>
      </MenuHeaderContainer>
    </>
  );
};

export default MenuHeader;
