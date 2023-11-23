import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <div>
        <h2>Sign-In</h2>
        <form>
            <div>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='email' placeholder='Enter Email' className='' />

            </div>
            <div>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' className='' />
            </div>
            <button><strong>Log in</strong></button>
            <p>You are agree about term and policies</p>
            <Link to="/Signup">Log in</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
