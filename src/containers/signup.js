import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

//--pages
import Emoji from '../components/emoji';
import '../components/signup.css';
import Logo from '../components/logo';

export default class Signup extends React.Component {

  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }

  render() {
    const { email, password, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-success" role="alert">{error}</div>
    const displayForm = <>
      {displayError}
      
      <Emoji/>
      <div className ='logo2'>
       <Logo />
      </div>
     
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Sign Up Requirements </h4>
        <div className='requirements'>
        <p >Be memorized; if a password is written down it must be secure.</p>
        <p>Contain at least one (1) character from three (3) of the following categories: Uppercase letter (A-Z) Lowercase letter (a-z) Digit (0-9) Special character (~`!@#$%^&*()+=_-{}[]\ ...
</p>
        </div>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
        </div>
        <div className='button'>
          <button type="submit" className="btn btn-outline-success" onClick={this.handleSubmit}>Sign Up</button>
        </div>
        <div className ='footer'>
            <footer></footer>
      </div>
      </form>
    </>;

    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return <Redirect to='/' />
            } else {
              return displayForm;
            } 
          }
        }
      </AuthContext.Consumer>
    );
  }
}

