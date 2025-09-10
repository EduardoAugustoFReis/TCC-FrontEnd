import { Link } from "react-router-dom";
import { MyAccountContainer, MyAccountForm } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../services/api";

const MyAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      if (avatar) {
        formData.append("avatar", avatar);
      }
      const response = await api.put("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
    } catch (error) {
      console.log("Erro ao atulizar usuário", error);
    }
  };

  return (
    <MyAccountContainer>
      <Link to={`/home`}>Voltar para a Home</Link>
      <h1>Minha conta</h1>
      <MyAccountForm onSubmit={handleSubmit}>
        <h2>Aqui você pode alterar seus dados</h2>
        <Input
          label="Nome:"
          id="name"
          placeholder="Digite seu novo nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email:"
          id="email"
          type="email"
          placeholder="Digite seu novo E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Senha:"
          type="password"
          id="password"
          placeholder="Digite sua nova Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          label="Sua imagem:"
          type="file"
          id="avatar"
          onChange={(e) => setAvatar(e.target.files?.[0] || null)}
        />

        <button type="submit">Fazer alteração</button>
      </MyAccountForm>
    </MyAccountContainer>
  );
};

export default MyAccount;
