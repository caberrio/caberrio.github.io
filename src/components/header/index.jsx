import { h } from "preact";
import "./index.css";

const Header = () => (
  <header className='header'>
    <div className='header__content'>
      <h1>Carlos Andrés Díaz Berrío</h1>

      <nav>
        <a href='#experience'>Experience</a>
        <a href='#skills'>Skills</a>
        <a href='#contact'>Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
