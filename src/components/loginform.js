import React from 'react';

const LoginForm =()=>{
    return(
        <>
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
        </>

    )
}
export default LoginForm;