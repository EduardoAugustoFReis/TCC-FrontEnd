import { useState } from "react";
import { NewEmployeeContainer, NewEmployeeForm } from "./styles";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import SelectNewBarber from "../../components/SelectNewBarber";
import { api } from "../../services/api";

const NewEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleNewEmployeeSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!role) {
      alert("Selecione uma função antes de enviar!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("role", role);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      const response = await api.post("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Funcionário cadastrado com sucesso.");
      console.log(response);

      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setAvatar(null);
    } catch (error) {
      console.log("Erro ao cadastrar novo funcionário.", error);
      alert("Erro ao cadastrar funcionário.");
    }
  };

  return (
    <NewEmployeeContainer>
      <Link to="/home">Voltar para a Home</Link>

      <NewEmployeeForm onSubmit={handleNewEmployeeSubmit}>
        <h2>Cadastre um novo Funcionário</h2>
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
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          id="phone"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <SelectNewBarber
          id="role"
          label="Função"
          options={["admin", "barbeiro"]}
          value={role}
          onChange={(e) => setRole(e.target.value as "admin" | "barbeiro")}
        />
        <Input
          type="file"
          id="avatar"
          label="Imagem do barbeiro"
          onChange={(e) => setAvatar(e.target.files?.[0] || null)}
        />

        <button type="submit">Cadastrar</button>
      </NewEmployeeForm>
    </NewEmployeeContainer>
  );
};

export default NewEmployee;
