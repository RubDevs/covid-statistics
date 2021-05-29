// Import libraries
import { useState } from 'react';
// Import components
import { Template } from './Template';

export const Login = () => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  });

  const handlerInputs = (element) => {
    setLoginState({
      ...loginState,
      [element.name]: element.value
    })
  }

  const login = (data) => {
    console.log(data);
  }

  return <Template login={login} state={loginState} handlerInputs={handlerInputs}/>
};