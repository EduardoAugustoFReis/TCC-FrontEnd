import MenuHeader from "./MenuHeader"
import { HeaderContainer, DivLogoContainer } from "./styles"
import { Link } from "react-router-dom";

import logoTransparent from "../../assets/image/logo transparente.png"

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/home">
      <DivLogoContainer>
        <img src={logoTransparent} alt="Logo da barbearia" />
        <p>Barbearia Virtual</p>
      </DivLogoContainer>
      </Link>
      <MenuHeader />
    </HeaderContainer>
  )
}

export default Header
