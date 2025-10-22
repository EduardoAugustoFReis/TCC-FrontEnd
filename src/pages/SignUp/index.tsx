import React, { useState } from "react";
import { Background, SignUpContainer, SignUpForm, WrapperLoginAndLink } from "./styles";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";



interface ISignUpResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "barbeiro" | "cliente";
  avatar: string | null;
}

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post<ISignUpResponse>("/users", {
        name,
        email,
        password,
        phone,
      });
      console.log(response);
      alert("Cadastro realizado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");

      navigate("/");
    } catch (error) {
      console.log("Erro ao cadastrar usuário", error);
    }
  };

  return (
    <SignUpContainer>
      <WrapperLoginAndLink>
        <SignUpForm onSubmit={handleSubmit}>
          <h2>Crie sua conta</h2>
          <Input
            label="Nome"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="E-mail"
            id="email"
            type="email"
            placeholder="Ex: email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Telefone"
            id="phone"
            placeholder="Ex: 61 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Criar conta</button>
        </SignUpForm>
        <Link to="/">Voltar para o login</Link>
      </WrapperLoginAndLink>
      <Background />

    </SignUpContainer>
  );
};

export default SignUp;
