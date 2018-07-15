import React from 'react';

const openQuote = 'https://firebasestorage.googleapis.com/v0/b/charles-keith-production.appspot.com/o/site-images%2Fopen_quotation.png?alt=media&token=3174ccb9-490d-4b9b-bac7-270617543805';
const closeQuote = 'https://firebasestorage.googleapis.com/v0/b/charles-keith-production.appspot.com/o/site-images%2Fclose_quotation.png?alt=media&token=dbf2f964-7b4d-4f7f-95c0-64a0686239a5';

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
