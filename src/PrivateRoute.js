// Import libraries
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const Component = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props => {
        if (token) {
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

// Map state
const mapStateToProps = state => ({
  token: state.authReducer.token,
});

export const PrivateRoute = connect(mapStateToProps, null)(Component);