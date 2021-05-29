// Import components
import { FacebookButton } from '../UI/Button/Facebook/Facebook';
import { GoogleButton } from '../UI/Button/Google/Google';

export const Template = ({
  login,
  state, 
  handlerInputs
}) => (
  <section className="login py-5">
    <section className="login__container">
      <h1 className="login__title">Login</h1>
      <form className="login__form">

        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input 
          className="login__input" 
          type="email" 
          id="email"
          name="email"
          value={state.email}
          onChange={e => handlerInputs(e.target)} 
        />

        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input 
          className="login__input" 
          type="password" 
          id="password"
          name="password"
          value={state.password}
          onChange={e => handlerInputs(e.target)} 
        />

        <button 
          className="login__button" 
          type="button"
          onClick={() => login(state)}
        >
          Login
        </button>

        <div className="row">
          <div className="col-6">
            <GoogleButton />
          </div>
          <div className="col-6">
            <FacebookButton />
          </div>
        </div>

      </form>
    </section>
  </section>
);