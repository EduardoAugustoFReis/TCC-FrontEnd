import FooterItems from './FooterItems'
import { FooterContainer } from './styles'
import logoTransparent from "../../assets/image/logo transparente.png"


const Footer = () => {
  return (
    <FooterContainer>
      <img src={logoTransparent} alt="Imagem da logo" />
      <FooterItems />      
    </FooterContainer>
  )
}

export default Footer
