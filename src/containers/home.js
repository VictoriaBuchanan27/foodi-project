import React from 'react';
import AuthContext from '../contexts/auth';

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
              return <h2>Please Login to Foodi Website.</h2>
            }
          }
        }
      </AuthContext.Consumer>
    )
  }
}