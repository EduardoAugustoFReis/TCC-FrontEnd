import { Link, useNavigate } from "react-router-dom";
import { MyAccountContainer, MyAccountForm } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../services/api";
import useAuth from "../../context/Auth/useAuth";
import InputFilePreview from "../../components/InputFile";

const MyAccount = () => {
  const { setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (name.trim()) formData.append("name", name);
      if (email.trim()) formData.append("email", email);
      if (password.trim()) formData.append("password", password);
      if (phone.trim()) formData.append("phone", phone);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      const { data: updatedUser } = await api.put(`/users`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Dados atualizados com sucesso.");
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      navigate("/home");
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
          label="Telefone"
          type="phone"
          id="phone"
          placeholder="Digite seu novo número"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputFilePreview
          id="avatar"
          label="Sua imagem"
          onChange={(e) => setAvatar(e.target.files?.[0] || null)}
        />

        <button type="submit">Fazer alteração</button>
      </MyAccountForm>
    </MyAccountContainer>
  );
};

export default MyAccount;
