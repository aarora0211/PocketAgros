import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './login.css';

const LoginForm = () => (
<main id="loginMain">
  <div className="login-form-row" id="login-form-row">
    <div className="login-form-col">
      <div className="form-heading text-center">
        <h2 className="heading-2">Sign in</h2>
        <p className="sub-heading">Welcome back! We missed you.</p>
      </div>
      <form>
        <div className="form-group-login">
            <label className='formLabelLogin'>Username
              <input className='formInputLogin' type="text" required/>
            </label>
        </div>
        <div className="form-group-login">
            <label className='formLabelLogin'>Password
              <input className='formInputLogin' type="password"/>
            </label>
        </div>
        <div className="signInButtons">
            <Link to={ROUTES.CUSTOMER}><button className="loginBtn" id="customerButton" type="button" aria-live="assertive">As Customer</button></Link>
            <Link to={ROUTES.FARMER}><button className="loginBtn" id="farmerButton" type="button" aria-live="assertive">As farmer</button></Link>
        </div>
      </form>
    </div>
  </div>
  </main>
);

export default LoginForm;
