import { log } from "../log.js";
import logoImg from "../assets/logo.png";

const Header = () => {
  log("<Header /> rendered", 1);

  return (
    <header id="main-header">
      <img src={logoImg} alt="Magnifying glass analyzing a document" />
      <h1>Counter</h1>
    </header>
  );
};

export default Header;
