// Import logos
import FacebookLogo from '../../assets/svgs/facebook.svg';
import GoogleLogo from '../../assets/svgs/google.svg';

export const Login = () => (
  <section className="login py-5">
    <section className="login__container">
      <h1 className="login__title">Login</h1>
      <form className="login__form">

        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input className="login__input" type="email" id="email" />

        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input className="login__input" type="password" id="password" />

        <button className="login__button" type="button">Login</button>

        <div className="row">
          <div className="col-6">
            <button className="login__button" type="button">
              <img src={FacebookLogo} alt="Facebook logo" />
            </button>
          </div>
          <div className="col-6">
            <button className="login__button" type="button">
            <img src={GoogleLogo} alt="Google logo" />
            </button>
          </div>
        </div>

      </form>
    </section>
  </section>
);