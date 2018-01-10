import React from 'react';

const openQuote = require('../../images/open_quotation.png');
const closeQuote = require('../../images/close_quotation.png');

export default () => (
  <div className="quote">
    <div className="quote__content-container">
      <h1 className="quote__content">
        Better a witty fool, than a foolish wit.
      </h1>
      <img src={openQuote} alt="" className="quote__image quote__image--open" />
      <img
        src={closeQuote}
        alt=""
        className="quote__image quote__image--close"
      />
    </div>
    <p className="quote__subtitle">- William Shakespeare's "Twelfth Night"</p>
  </div>
);
