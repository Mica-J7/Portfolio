import Arrow from '@/assets/logo/arrow-black.png';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="grid-container">
        <div className="grid-container__center">
          <p>Ce Portfolio est créé par Mica</p>
          <p>- 2025 -</p>
        </div>
        <div className="grid-container__right">
          <a href="#presentation">
            <img src={Arrow} alt="Remonter en haut de page" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
