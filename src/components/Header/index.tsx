import MenuHeader from "./MenuHeader"
import { HeaderContainer } from "./styles"

import logoTransparent from "../../assets/image/logo transparente.png"

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoTransparent} alt="Logo da barbearia" />
      <MenuHeader />
    </HeaderContainer>
  )
}

export default Header
