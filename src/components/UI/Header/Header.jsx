// Import libraries
import { Link, useLocation } from 'react-router-dom';
// Import logo
import Logo from '../../../assets/svgs/logo.svg';

export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <section className="h-100 w-100 px-4 px-md-0 container d-flex align-items-center justify-content-between">
        <Link to="/" className="header__link">
          <img src={Logo} alt="Logo" />
        </Link>
        <h2 className="header__title">Covid Statistics</h2>
        {location.pathname !== '/login' &&
          <nav>
            <Link to="/login">
              <button className="header__button">
                LogIn
              </button>
            </Link>
          </nav>
        }
      </section>
    </header>
  )
};