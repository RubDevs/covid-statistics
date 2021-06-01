// Import libraries
import { Link } from 'react-router-dom';
// Import components
import { FacebookButton } from '../UI/Button/Facebook/Facebook';
import { GoogleButton } from '../UI/Button/Google/Google';
import { Alert } from '../UI/Alert/Alert';
import { Spinner } from '../UI/Spinner/Spinner';

export const Template = ({
  login,
  state, 
  handlerInputs,
  isLoading,
  alertMessage
}) => (
  <section className="login py-5">
    <section className="login__container">
      <h1 className="login__title">Login</h1>
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

        <button 
          className="login__button" 
          type="button"
          onClick={() => login(state)}
          disabled={!state.password || !state.email}
        >
          {isLoading ? <Spinner /> : 'Login'}
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
      <div className="login__divisor">
        <p className="login__text">New in Covid Statistics?</p>
      </div>
      <Link to="/register">
        <button
          className="login__button" 
          type="button"
        >
          Create your account
        </button>
      </Link>
    </section>
  </section>
);