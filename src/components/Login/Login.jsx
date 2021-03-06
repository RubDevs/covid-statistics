// Import libraries
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import { Template } from './Template';
// Import actions
import { login } from '../../redux/actions/authActions';

export const Component = ({ 
  login,
  successRequest,
  errorRequest,
  messageError
}) => {
  // State
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    type: '',
    show: false
  });
  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  });

  // Handler inputs
  const handlerInputs = (element) => {
    setLoginState({
      ...loginState,
      [element.name]: element.value
    })
  }

  // Handle success request
  useEffect(() => {
    if (successRequest) {
      setIsLoading(false);
    }
  }, [successRequest])
  
  // Handle error request
  useEffect(() => {
    if (errorRequest && messageError) {
      setIsLoading(false);
      setAlertMessage({
        message: messageError,
        type: 'error',
        show: true
      });
    }
  }, [errorRequest, messageError])

  // Valid form
  const validForm = (data) => {
    setIsLoading(true);
    login(data);
  }

  return (
    <Template 
      login={validForm} 
      state={loginState} 
      handlerInputs={handlerInputs}
      isLoading={isLoading}
      alertMessage={alertMessage}
    />
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  login(data) {
    dispatch(login({ data }))
  }
});

// Map state
const mapStateToProps = state => ({
  successRequest: state.authReducer.successRequest,
  errorRequest: state.authReducer.errorRequest,
  messageError: state.authReducer.messageError
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(Component);