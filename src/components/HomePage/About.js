import React from 'react';
const writer = require('../../images/writting-file.svg');
const playwright = require('../../images/stage.svg');
const reviewer = require('../../images/review.svg');
const leafBook = 'https://firebasestorage.googleapis.com/v0/b/charles-keith-production.appspot.com/o/site-images%2Fleaf_book.jpg?alt=media&token=a0830d10-c7fb-4cea-83f3-7d242eb2fcd3';
const bookStack = 'https://firebasestorage.googleapis.com/v0/b/charles-keith-production.appspot.com/o/site-images%2Fbook_stack.jpg?alt=media&token=3677de31-31c2-4f69-914c-51413ad55e01';
const openQuote = 'https://firebasestorage.googleapis.com/v0/b/charles-keith-production.appspot.com/o/site-images%2Fopen_quotation.png?alt=media&token=3174ccb9-490d-4b9b-bac7-270617543805';
const closeQuote = 'https://firebasestorage.googleapis.com/v0/b/charles-keith-production.appspot.com/o/site-images%2Fclose_quotation.png?alt=media&token=dbf2f964-7b4d-4f7f-95c0-64a0686239a5';

export const About = (props) => (
  <div className="about">
    <div className="about-container about-container--1">
      <div className="about__content">
        <div className="about__content-container">
          <div className="about__writer">
            <img src={writer} alt="" className="about__writer--image" />
            <p className="about__writer--text"> Short stories and essays </p>
          </div>
        </div>

        <div className="about__content-container">
          <div className="about__theatre">
            <img src={playwright} alt="" className="about__theatre--image" />
            <p className="about__theatre--text"> Playwright </p>
          </div>
        </div>

        <div className="about__content-container">
          <div className="about__reviewer">
            <img src={reviewer} alt="" className="about__reviewer--image" />
            <p className="about__reviewer--text">
              {' '}
              Literature and media reviews{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="about__image">
        <img onLoad={props.handlePageLoad} src={bookStack} />
      </div>
    </div>

    <div className="about-container about-container--2">
      <div className="about__image">
        <img src={leafBook} />
      </div>

      <div className="about__content about__content--2">
        <div className="about__content-container">
          <div className="review">
            <div className="review__content-container">
              <h1 className="review__content">
                Who says you can’t update Shakespeare?
              </h1>
              <img
                src={openQuote}
                alt=""
                className="review__image review__image--open-1"
              />
              <img
                src={closeQuote}
                alt=""
                className="review__image review__image--close-1"
              />
            </div>
            <p className="review__subtitle">- Triangle Arts & Entertainment</p>
          </div>
        </div>

        <div className="about__content-container">
          <div className="review">
            <div className="review__content-container">
              <h1 className="review__content">
                The jewel of the festival this year was Chuck Keith’s “Love and
                Taxes.”{' '}
              </h1>
              <img
                src={openQuote}
                alt=""
                className="review__image review__image--open-2"
              />
              <img
                src={closeQuote}
                alt=""
                className="review__image review__image--close-2"
              />
            </div>
            <p className="review__subtitle">
              - Classical Voice of North Carolina
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
