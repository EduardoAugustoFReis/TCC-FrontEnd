import { FaRegTrashCan } from "react-icons/fa6";
import { BarberCardContainer } from "./styles";
import useAuth from "../../../context/Auth/useAuth";
import { api } from "../../../services/api";
import type { IUser } from "../../../types";

interface BarberCardProps {
  barber: IUser;
}

const BarberCard = ({ barber }: BarberCardProps) => {
  const { user } = useAuth();

  const handleDeleteEmployee = async () => {
    const confirmDeleteBarber = confirm("Você tem certeza que deseja deletar este funcionário?");
    
    if (confirmDeleteBarber) {
      try { 
        api.delete(`/users/${barber.id}`);
        alert("Usuário deletado com sucesso.");
      } catch (error) {
        console.log("Erro ao deletar barbeiro.", error);
      }
    }

  };
  return (
    <BarberCardContainer>
      <div className="barberCard">
        {user?.role === "admin" && (
          <button onClick={handleDeleteEmployee} className="trashButton">
            <FaRegTrashCan />
          </button>
        )}
        <img
          src={`${api.defaults.baseURL}${barber.avatar}`}
          alt={`Avatar do ${barber.name}`}
        />
        <div className="textBox">
          <strong>{barber.name}</strong>
          <p>Telefone: {barber.phone}</p>
          <p>Email: {barber.email}</p>
        </div>
      </div>
    </BarberCardContainer>
  );
};

export default BarberCard;
