import React from 'react';
import './Contact.scss';

function Contact() {
  const handleClick = (ev) => {
    ev.preventDefault();
  };
  return (
    <div id="contact" className="Contact">
      <div className="container Contact__content">
        <h2 className="Contact__content__title">Contact</h2>
        <form className="Contact__content__form">
          <div className="Contact__content__form__group">
            <label htmlFor="name">
              Name
              {' '}
            </label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="Contact__content__form__group">
            <label htmlFor="email">
              Email
              {' '}
            </label>
            <input type="email" name="email" id="email" />

          </div>
          <div className="Contact__content__form__group">
            <label htmlFor="message">
              Message
              {' '}
            </label>
            <textarea name="message" id="message" cols="30" rows="10" />
          </div>
          <button
            type="submit"
            className="Contact__content__form__button"
            onClick={handleClick}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
