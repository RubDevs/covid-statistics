// Import libraries
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// Import logos
import FacebookLogo from '../../../../assets/svgs/facebook.svg';
// Import actions
import { responseFacebookLogin } from '../../../../redux/actions/authActions';

export const Component = ({ responseFacebookLogin }) => (
  <FacebookLogin
    appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
    fields="name,email"
    callback={responseFacebookLogin}
    render={({ onClick }) => (
      <button 
        className="login__button" 
        type="button" 
        onClick={onClick}
      >
        <img src={FacebookLogo} alt="Facebook logo" />
      </button>
    )}
  />
);

// Map dispatch
const mapDispatchToProps = dispatch => ({
  responseFacebookLogin(data) {
    dispatch(responseFacebookLogin(data))
  }
});

export const FacebookButton = connect(null, mapDispatchToProps)(Component);