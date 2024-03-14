import { HeaderContainer } from "./styles";
import logo from "../../assets/icon.png";
export function Header() {
  return (
    <HeaderContainer>
      <img className={"logo"} src={logo} alt={""} />
    </HeaderContainer>
  );
}
