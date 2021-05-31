// Import libraries
import { Link } from 'react-router-dom';
// Import components
import { Alert } from '../UI/Alert/Alert';
import { Spinner } from '../UI/Spinner/Spinner';

export const Template = ({
  register,
  state, 
  handlerInputs,
  isLoading,
  alertMessage
}) => (
  <section className="login py-5">
    <section className="login__container">
      <h1 className="login__title">Register</h1>
      {alertMessage.show && 
        <Alert message={alertMessage.message} type={alertMessage.type}/>
      }
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

        <label className="login__label" htmlFor="password">
          Confirm Password
        </label>
        <input 
          className="login__input" 
          type="password" 
          id="confirmPassword"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={e => handlerInputs(e.target)} 
        />

        <button 
          className="login__button" 
          type="button"
          onClick={() => register(state)}
          disabled={!state.password || !state.email || !state.confirmPassword}
        >
          {isLoading ? <Spinner /> : 'Register'}
        </button>

        <div className="login__divisor">
          <p className="login__text">Already have an account?</p>
        </div>
        <Link to="/login">
          <button
            className="login__button" 
            type="button"
          >
            Login
          </button>
        </Link>

      </form>

    </section>
  </section>
);