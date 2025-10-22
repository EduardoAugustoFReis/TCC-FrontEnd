import { Link, useNavigate } from "react-router-dom";
import { NewServiceContainer, NewServiceForm } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../services/api";

const NewService = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  const handleNewService = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!name.trim()) {
        alert("O nome é obrigatório.");
        return;
      }

      if (!price || isNaN(price) || price <= 0) {
        alert("O preço é obrigatório, e deve ser maior que zero.");
        return;
      }

      if (!duration || isNaN(duration) || duration <= 0) {
        alert("A duração é obrigatória.");
        return;
      }

      const response = await api.post("/services", {
        name,
        price,
        duration,
      });

      alert("Serviço cadastrado com sucesso.");
      setName("");
      setPrice(0);
      setDuration(0);
      navigate("/home");
      console.log(response.data);
    } catch (error) {
      console.log("Erro ao cadastrar serviço.", error);
    }
  };

  const capitalizeFirst = (text: string) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <NewServiceContainer>
      <Link to={`/home`}>Voltar para Home</Link>
      <h1>Novos Serviços</h1>

      <main>
        <NewServiceForm onSubmit={handleNewService}>
          <h2>Cadastre um novo serviço</h2>
          <Input
            id="name"
            label="Nome:"
            placeholder="Digite o nome do serviço"
            value={name}
            onChange={(e) => setName(capitalizeFirst(e.target.value))}
          />
          <Input
            id="price"
            label="Preço:"
            type="number"
            placeholder="Digite o preço do serviço"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <Input
            id="duration"
            label="Duração em minutos:"
            type="number"
            placeholder="Digite a duração do serviço em minutos."
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />

          <button type="submit">Cadastrar</button>
        </NewServiceForm>
      </main>
    </NewServiceContainer>
  );
};

export default NewService;
