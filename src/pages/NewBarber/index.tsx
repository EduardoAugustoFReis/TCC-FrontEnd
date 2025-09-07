import { useState } from "react";
import Input from "../../components/Input";
import { NewBarberContainer, NewBarberForm } from "./styles";
import { Link } from "react-router-dom";
import SelectNewBarber from "../../components/SelectNewBarber";
import { api } from "../../services/api";

const NewBarber = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const handleNewBarberSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/users", {
        name,
        email,
        phone,
        role,
      });

      alert("Funcionário cadastrado com sucesso.");
      console.log(response);

      setName("");
      setEmail("");
      setPhone("");
      setRole("");
    } catch (error) {
      console.log("Erro ao cadastrar novo funcionário.", error);
      alert("Erro ao cadastrar funcionário.");
    }
  };

  return (
    <NewBarberContainer>
      <Link to="/home">Voltar para a Home</Link>

      <NewBarberForm onSubmit={handleNewBarberSubmit}>
        <h2>Cadastre um novo barbeiro</h2>
        <Input
          id="none"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          id="email"
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
        id="password"
        label="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />

        <Input
          id="phone"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <SelectNewBarber
          id="role"
          label="Papel do seu funcionário"
          options={["admin", "barbeiro"]}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </NewBarberForm>
    </NewBarberContainer>
  );
};

export default NewBarber;
