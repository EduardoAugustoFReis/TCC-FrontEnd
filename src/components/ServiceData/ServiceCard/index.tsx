import useAuth from "../../../context/Auth/useAuth";
import type { IService } from "../../../types";
import { ServiceCardContainer } from "./styles";
import { api } from "../../../services/api";

interface ServiceCardProps {
  service: IService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { user } = useAuth();

  const handleDeleteService = async () => {
    const confirmDeleteService = confirm(
      "Você tem certeza que deseja deletar esse serviço ?"
    );

    if (confirmDeleteService) {
      try {
        api.delete(`/services/${service.id}`);
        alert("Serviço deletado com sucesso.");
      } catch (error) {
        console.log("Erro ao deletar serviço.", error);
      }
    }
  };

  return (
    <ServiceCardContainer>
      <div className="serviceCard">
        <div className="textBox">
          <h3>{service.name}</h3>
          <p>Preço: R$ {service.price}</p>
          <p>Duração: {service.duration} minutos</p>
        </div>
        {user?.role === "admin" && (
          <button onClick={handleDeleteService} className="trashButton">
            Excluir
          </button>
        )}
      </div>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
