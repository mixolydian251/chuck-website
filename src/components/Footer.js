import React from 'react';

const facebook = require('../images/facebook.svg');
const instagram = require('../images/instagram.svg');
const twitter = require('../images/twitter.svg');

export default () => (
  <div className="footer">
    <div className="footer__social">
      <img src={facebook} alt="" className="footer__social--image" />

      <img src={instagram} alt="" className="footer__social--image" />

      <img src={twitter} alt="" className="footer__social--image" />
    </div>

    <div className="footer__copyright">
      Charles Keith | &copy;2018 | Raleigh, NC
    </div>
  </div>
);
