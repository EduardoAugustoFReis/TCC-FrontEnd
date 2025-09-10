import { FooterItemsContainer } from "./styles";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const FooterItems = () => {
  return (
    <FooterItemsContainer>
      <h3>Siga nossas redes sociais</h3>

      <ul>
        <li>
          <a href="/home" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="/home" target="_blank">
            <FaSquareXTwitter />
          </a>
        </li>
        <li>
          <a href="/home" target="_blank">
            <FaFacebook />
          </a>
        </li>
      </ul>
    </FooterItemsContainer>
  );
};

export default FooterItems;
