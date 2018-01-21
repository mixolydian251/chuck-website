import React from 'react';
const facebook = require('../../images/facebook.svg');
const google = require('../../images/google.svg');

const LoginModal = (props) => (
  <div className="login-modal">

    Choose a sign in method
    <button className="login-modal__button login-modal__button--facebook"
            onClick={props.startLoginFacebook}>
      <img src={facebook} alt="" className="login-modal__image--facebook"/>
      <p>Login with Facebook</p>
    </button>

    <button className="login-modal__button login-modal__button--google"
            onClick={props.startLoginGoogle}>
      <img src={google} alt="" className="login-modal__image--google"/>
      <p>Login with Google</p>
    </button>

    <button className="content__btn content__btn--remove"
            onClick={props.handleLoginModal}>
      Close
    </button>
  </div>
);

export default LoginModal