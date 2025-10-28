import { useState } from "react";
import { NewEmployeeContainer, NewEmployeeForm } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import SelectNewBarber from "../../components/SelectNewBarber";
import { api } from "../../services/api";
import InputFilePreview from "../../components/InputFile";

const NewEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const navigate = useNavigate();

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
      navigate("/home");
    } catch (error) {
      console.log("Erro ao cadastrar novo funcionário.", error);
      alert("Erro ao cadastrar funcionário.");
    }
  };

  return (
    <NewEmployeeContainer>
      <Link to="/home">Voltar para a Home</Link>
      <h1>Novos Funcionários</h1>

      <NewEmployeeForm onSubmit={handleNewEmployeeSubmit}>
        <h2>Cadastre um novo Funcionário</h2>
        <Input
          id="none"
          label="Nome"
          placeholder="Digite o nome do funcionário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          id="email"
          label="E-mail"
          placeholder="Digite o e-mail do funcionário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          label="Senha"
          placeholder="Digite a senha do funcionário"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          id="phone"
          label="Phone"
          placeholder="Digite o telefone do funcionário"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <SelectNewBarber
          id="role"
          label="Função:"
          options={["admin", "barbeiro"]}
          value={role}
          onChange={(e) => setRole(e.target.value as "admin" | "barbeiro")}
        />

        <InputFilePreview
          id="avatar"
          label="Selecione a imagem do Funcionário"
          onChange={(e) => setAvatar(e.target.files?.[0] || null)}
        />

        <button type="submit">Cadastrar</button>
      </NewEmployeeForm>
    </NewEmployeeContainer>
  );
};

export default NewEmployee;
