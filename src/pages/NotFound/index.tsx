import { Link } from "react-router-dom";
import { Container, Content } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <Content>
        <h2>Ops! Página não encontrada</h2>
        <p>Essa rota não existe ou foi removida.</p>
        <Link to="/home">Me leva de volta pra Home</Link>
      </Content>
    </Container>
  );
};

export default NotFound;
