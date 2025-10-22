import {
  Background,
  FormLogin,
  LoginContainer,
  WrapperLoginAndLink,
} from "./styles";
import Input from "../../components/Input";
import useAuth from "../../context/Auth/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Todos os campos precisam ser preenchidos");
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
        <WrapperLoginAndLink>
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
            <button type="submit">Logar</button>
          </FormLogin>
          <Link to="/signup">Não tem uma conta? crie já</Link>
        </WrapperLoginAndLink>
        <Background/>
    </LoginContainer>
  );
};

export default Login;
