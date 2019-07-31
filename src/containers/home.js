import React from 'react';
import AuthContext from '../contexts/auth';
import Logo from '../components/logo';

export default class Home extends React.Component {
  
  render() {
    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return (
                <>
                  <h2>Welcome back, {user.email}</h2>
                  <h4>Your ID is: {user.uid}</h4>
                </>
              )
            } else {
              return (
                <>
              <h1>Welcome to Foodi</h1>
              <h2> A place where food lovers can post pictures that never go out of TASTE!</h2>
              <h3> Please Sign Up or Login to Foodi Website.</h3>
              <Logo/>
              </>
              )
            }
          }
        }
      </AuthContext.Consumer>
    )
  }
}