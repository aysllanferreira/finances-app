import React from 'react';
import {
  AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail,
} from 'react-icons/ai';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <h2>
        Demo made with
        {' '}
        <span>❤</span>
        {' '}
        by: Aysllan Ferreira
      </h2>
      <div className="Footer__social">
        <a
          className="Footer__social__linkedin"
          href="https://www.linkedin.com/in/aysllan-ferreira-61aa58228/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="Footer__social__github"
          href="https://github.com/aysllanferreira"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="Footer__social__instagram"
          href="https://www.instagram.com/aysllanferreira99/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          className="Footer__social__email"
          href="mailto:aysllan.ferreiraks@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
}

export default Footer;
