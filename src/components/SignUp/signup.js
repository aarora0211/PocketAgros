import React from 'react';

import './signup.css';

const SignForm = () => (
  <div className="signup-form-row">
    <div className="signup-form-col">
      <div className="form-heading text-center">
        <h2 className="heading-2">Sign Up</h2>
        <p className="sub-heading">Let's Get Started. Please fill out the form below.</p>
      </div>
      <form>
        <div className="form-group">
            <label className="formLabel">Username </label>
            <input className="formInput" type="text" />
        </div>
        <div className="form-group">
            <label className="formLabel">Password </label>
            <input className="formInput" type="password" />
        </div>
        <div className="form-group">
            <label className="formLabel">Retype Password </label>
            <input className="formInput" type="password" />
        </div>
        <div className="form-group">
            <label className="formLabel">Email Address </label>
            <input className="formInput" type="email"/>
        </div>
        <div className="form-group">
        <div>
        <label className="containerRadio" id="farmerRadio"> Farmer
          <input type="radio" checked="checked" name="radio"/>
          <span className="checkmark"></span>
        </label>
        <label className="containerRadio" id="customerRadio"> Customer
          <input type="radio" name="radio"/>
          <span className="checkmark"></span>
        </label>
        </div>
        </div>
        <div className="form-group text-center">
            <button className="btn" type="button" aria-live="assertive">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
);

export default SignForm;
