import logoMobile from "../../assets/logo-mobile.svg";
import logo from "../../assets/logo-desktop.svg";

import { StyledContainer, StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <picture>
          <source srcSet={logoMobile} media="(max-width: 954px)" />
          <source srcSet={logo} media="(min-width: 955px)" />
          <img
            src={logo}
            alt="Logo da Nu Kenzie escrito com tipografia sem serifa. O Nu é na cor rosa e o Kenzie em cinza escuro"
          />
        </picture>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
