import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

//-----PAGES
import '../components/login.css';
import Emoji from '../components/emoji';
import Logo from '../components/logo';
import Icons from '../components/icons';
// import LoginForm from '../components/loginform';


export default class Login extends React.Component {

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
    firebase.auth().signInWithEmailAndPassword(email, password)
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
      <div className='logo-picture'>
      <Logo /> 
      </div>
      {/* <LoginForm/> */}
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
  
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
        </div>
        <div className='button'>
                <button type="submit" className="btn btn-outline-success " onClick={this.handleSubmit}>Login</button>
        </div>
        <div className='icons'>
         <p>Sign Up Using These Platforms</p>
         <Icons />
        </div>
        <div className="email-address">
          <Link className="email-address" to="/signup">Create New Account Using Email Address</Link>
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
    )
  }
}

