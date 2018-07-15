import React from 'react';

const facebook = require('../images/facebook.svg');
const twitter = require('../images/twitter.svg');

export default () => (
  <div className="footer">
    <div className="footer__social">
      <a href="https://www.facebook.com/Charles-Keith-2076271852600711/?ref=your_pages" className="footer__social--container" target="_blank">
        <img src={facebook} alt="" className="footer__social--image" />
      </a>

      <a href="https://twitter.com/cekeith_nc?lang=en" className="footer__social--container" target="_blank">
        <img src={twitter} alt="" className="footer__social--image" />
      </a>
    </div>

    <div className="footer__copyright">
      Charles Keith | &copy;2018 | Raleigh, NC
    </div>
  </div>
);
