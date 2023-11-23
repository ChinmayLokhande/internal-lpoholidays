import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
    <div>
        <h2>Sign-Up</h2>
      <form>
      <div>
              <label htmlFor='name'><strong>Name</strong></label>
              <input type='name' placeholder='Enter Name' className='' />

          </div>
          <div>
              <label htmlFor='email'><strong>Email</strong></label>
              <input type='email' placeholder='Enter Email' className='' />

          </div>
          <div>
              <label htmlFor='password'><strong>Password</strong></label>
              <input type='password' placeholder='Enter Password' className='' />
          </div>
          <button><strong>Sign up</strong></button>
          <p>You are agree about term and policies</p>
          <Link to="/">Login</Link>
      </form>
    </div>
  </div>
  )
}

export default Signup
