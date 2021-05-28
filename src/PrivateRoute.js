import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Get token
const auth = window.localStorage.getItem('Covid-Statistics-Token');

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props => {
        if (auth) {
          return <Component {...props} />
        } else {
          return (
            <Redirect 
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }} 
            />
          )
        }
      }}
    />
  )
}