import React, { useState } from "react";
import {
  SignUpContainer,
  SignUpForm,
  WrapperLoginAndLink,
  ImageDiv,
  MoustacheDiv
} from "./styles";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import backgroundImg from "../../assets/image/logo.jpg";
import moustacheImg from "../../../public/logo-bigode-preto-trasparente.png"
import { FaExternalLinkAlt } from "react-icons/fa";

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

    if (!name.trim() || !email.trim() || !password.trim() || !phone.trim()) {
      alert("Preencha todos os campos");
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
      await api.post<ISignUpResponse>("/users", {
        name: name.trim(),
        email: email.trim(),
        password,
        phone: phone.trim(),
      });

      alert("Cadastro realizado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");

      navigate("/");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
      console.log("Erro ao cadastrar usuário", error);
    }
  };

  return (
    <SignUpContainer>
      <h2>Barbearia Virtual</h2>
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

          <button
            type="submit"
            disabled={!name || !email || !password || !phone}
          >
            Criar conta
          </button>
        </SignUpForm>
        <ImageDiv>
            <img src={backgroundImg} alt="" />
          </ImageDiv>
          <MoustacheDiv>
            <img src={moustacheImg} alt="" />
          </MoustacheDiv>
      </WrapperLoginAndLink>
      <span>Já possui conta? <Link to="/">Inicie sessão! <FaExternalLinkAlt/></Link></span>
    </SignUpContainer>
  );
};

export default SignUp;
