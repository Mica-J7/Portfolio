import './header.scss';

function Header() {
  return (
    <header>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li>
            <a href="#presentation">Présentation</a>
          </li>
          <li>
            <a href="#projects">Mes projets</a>
          </li>
          <li>
            <a href="#skills">Mes compétences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#cv">Mon CV</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
