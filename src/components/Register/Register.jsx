// Import libraries
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import { Template } from './Template';
// Import actions
import { register } from '../../redux/actions/authActions';

export const Component = ({ 
  register,
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
  const [registerState, setRegisterState] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handler inputs
  const handlerInputs = (element) => {
    setRegisterState({
      ...registerState,
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

  const validForm = (data) => {
    if (data.password === data.confirmPassword) {
      setAlertMessage({
        message: '',
        type: 'error',
        show: false
      });
      register(data);
      setIsLoading(true);
    } else {
      setAlertMessage({
        message: "Passwords don't match",
        type: 'error',
        show: true
      });
    }
    console.log(data);
  }

  // Valid form
  return (
    <Template 
      register={validForm} 
      state={registerState} 
      handlerInputs={handlerInputs}
      isLoading={isLoading}
      alertMessage={alertMessage}
    />
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  register(data) {
    dispatch(register({ data }))
  }
});

// Map state
const mapStateToProps = state => ({
  successRequest: state.authReducer.successRequest,
  errorRequest: state.authReducer.errorRequest,
  messageError: state.authReducer.messageError
});

export const Register = connect(mapStateToProps, mapDispatchToProps)(Component);