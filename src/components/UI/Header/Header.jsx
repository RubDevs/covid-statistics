// Import libraries
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
// Import logo
import Logo from '../../../assets/svgs/logo.svg';
// Import actions
import { logout } from '../../../redux/actions/authActions';

export const Component = ({ logout, token }) => {
  const location = useLocation();

  return (
    <header className="header">
      <section className="h-100 w-100 px-4 px-md-0 container d-flex align-items-center justify-content-between">
        <Link to="/" className="header__link">
          <img src={Logo} alt="Logo" />
        </Link>
        <h2 className="header__title">Covid Statistics</h2>
        {location.pathname === '/' &&
          <nav>
            <Link to="/login">
              <button className="header__button">
                LogIn
              </button>
            </Link>
          </nav>
        }
        {token &&
          <nav>
            <button 
              className="header__button" 
              onClick={() => logout()}
            >
              LogOut
            </button>
          </nav>
        }
      </section>
    </header>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout())
  }
});

// Map state
const mapStateToProps = state => ({
  token: state.authReducer.token,
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(Component);