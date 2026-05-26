import { useState } from "react";
import { NewEmployeeContainer, NewEmployeeForm } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import InputInternalForms from "../../components/InputInternalForms";
import SelectNewBarber from "../../components/SelectNewBarber";
import { api } from "../../services/api";
import InputFilePreview from "../../components/InputFile";
import { MdOutlineKeyboardReturn } from "react-icons/md";

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

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !phone.trim() ||
      !role
    ) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    if (!email.includes("@")) {
      alert("E-mail inválido");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("password", password);
      formData.append("phone", phone.trim());
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
      <span><Link to={`/home`}><MdOutlineKeyboardReturn /> Voltar para a Home</Link></span>
      <h1>Novos Funcionários</h1>

      <NewEmployeeForm onSubmit={handleNewEmployeeSubmit}>
        <h2>Cadastre um novo Funcionário</h2>
        <InputInternalForms
          id="none"
          label="Nome"
          placeholder="Digite o nome do funcionário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputInternalForms
          id="email"
          label="E-mail"
          placeholder="Digite o e-mail do funcionário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputInternalForms
          id="password"
          label="Senha"
          placeholder="Digite a senha do funcionário"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputInternalForms
          id="phone"
          label="Telefone"
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

        <button
          type="submit"
          disabled={
            !name.trim() ||
            !email.trim() ||
            !password.trim() ||
            !phone.trim() ||
            !role
          }
        >
          Cadastrar
        </button>
      </NewEmployeeForm>
    </NewEmployeeContainer>
  );
};

export default NewEmployee;
