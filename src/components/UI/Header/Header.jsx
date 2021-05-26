// Import libraries
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <section className="w-100 container d-flex align-items-center justify-content-between py-3">
      <Link to="/" className="header__title">
        <h2>Covid Statistics</h2>
      </Link>
      <nav>
        <Link to="/login">
          <button className="header__button btn btn-light">
            LogIn
          </button>
        </Link>
      </nav>
    </section>
  </header>
);