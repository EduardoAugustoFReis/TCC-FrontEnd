import { Link } from "react-router-dom";
import { NewServiceContainer, NewServiceForm } from "./styles";

const NewService = () => {
  return (
    <NewServiceContainer>
      <Link to={`/home`}>Voltar para Home</Link>
      <main>
        <h1>Cadastre um novo serviço</h1>
        <NewServiceForm>


          <button type="submit">Cadastrar</button>
        </NewServiceForm>
      </main>
    </NewServiceContainer>
  );
};

export default NewService;
