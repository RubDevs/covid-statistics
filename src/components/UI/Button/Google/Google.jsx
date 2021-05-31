// Import libraries
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
// Import logos
import GoogleLogo from '../../../../assets/svgs/google.svg';
// Import actions
import { successGoogleLogin, errorGoogleLogin } from '../../../../redux/actions/authActions';

export const Component = ({ successGoogleLogin, errorGoogleLogin }) => (
  <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    onSuccess={successGoogleLogin}
    onFailure={errorGoogleLogin}
    render={({ onClick }) => (
      <button 
        className="login__button" 
        type="button" 
        onClick={onClick} 
      >
        <img src={GoogleLogo} alt="Google logo" />
      </button>
    )}
  />
);

// Map dispatch
const mapDispatchToProps = dispatch => ({
  successGoogleLogin(data) {
    dispatch(successGoogleLogin(data))
  },
  errorGoogleLogin(data) {
    dispatch(errorGoogleLogin(data))
  }
});

export const GoogleButton = connect(null, mapDispatchToProps)(Component);