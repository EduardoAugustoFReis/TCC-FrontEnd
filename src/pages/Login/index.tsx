import {
  FormLogin,
  ImageDiv,
  LoginContainer,
  MoustacheDiv,
  WrapperLogin,
} from "./styles";
import Input from "../../components/Input";
import useAuth from "../../context/Auth/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import backgroundImg from "../../assets/image/logo.jpg";
import moustacheImg from "../../../public/logo-bigode-preto-trasparente.png"

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Preencha e-mail e senha");
      return;
    }
    const { success, user } = await login(email, password);

    if (success && user) {
      navigate("/home");
    } else {
      alert("Email ou senha inválidos!");
    }
  };

  return (
    <LoginContainer>
      <h2>Barbearia Virtual</h2>
      <WrapperLogin>
        <FormLogin onSubmit={handleSubmit}>
          <h2>Faça seu login</h2>
          <Input
            label="E-mail"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={!email || !password}>
            Entrar
          </button>
        </FormLogin>
          <ImageDiv>
            <img src={backgroundImg} alt="" />
          </ImageDiv>
          <MoustacheDiv>
            <img src={moustacheImg} alt="" />
          </MoustacheDiv>
      </WrapperLogin>
      <span>Não possui conta? <Link to="/signup">Crie agora!</Link></span>
    </LoginContainer>
  );
};

export default Login;
