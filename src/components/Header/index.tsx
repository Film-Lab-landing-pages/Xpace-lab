import Link from "next/link";
import { HeaderContainer, NavItem } from "./styles";
import { colors } from "@/styles/variables";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo-container ">
        <img src="./logo-xpace-lab-imagem.png" alt="logo xpace lab" />
      </div>
      <nav>
        <NavItem $hovercolor={colors.pink}>
          <Link href="#main">Universo</Link>
        </NavItem>
        <NavItem $hovercolor={colors.yellow}>
          <Link href="#about"> Estrelas</Link>
        </NavItem>

        <NavItem $hovercolor={colors.blue}>
          <Link href="#contact">Contato </Link>
        </NavItem>
      </nav>
      <img className="menu-border" src="/images/menu-border.png" alt="" />
    </HeaderContainer>
  );
};

export default Header;
