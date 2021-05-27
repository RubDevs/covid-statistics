// Import logos
import Logo from '../../../assets/svgs/logo.svg';
import GithubLogo from '../../../assets/svgs/github.svg';
import ReactLogo from '../../../assets/svgs/react.svg';
import SassLogo from '../../../assets/svgs/sass.svg';
import BootstrapLogo from '../../../assets/svgs/bootstrap.svg';

export const Footer = () => (
  <footer className="footer">
    <section className="w-100 px-4 px-md-0 container d-flex flex-column flex-md-row align-items-center justify-content-between py-5">
      <img src={Logo} alt="Logo" />
      <ul className="footer__list py-5 py-md-0">
        <li>
          <a href="https://github.com/RubDevs/covid-statistics" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src={ReactLogo} alt="React logo" />
          </a>
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
            <img src={SassLogo} alt="Sass logo" />
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
            <img src={BootstrapLogo} alt="Bootstrap logo" />
          </a>
        </li>
      </ul>
      <h5 className="footer_title">Platzi Master 2021</h5>
    </section>
  </footer>
);
