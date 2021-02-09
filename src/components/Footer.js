import React from 'react';

const Footer = () => {
  return (
    <div className='Footer'>
      <h1>Presidential School In Namangan</h1>
      <div className='footer-links'>
        <a href='/about'>About</a>
        <a href='/news'>News</a>
        <a href='/admission'>Admission</a>
      </div>
      <div className='contact'>
        <ul className='contact-ul'>
          <li>
            <i className='fas fa-phone-alt' />
            <span>+998 99 977 59 65</span>
          </li>
          <li>
            <i className='fas fa-envelope' />
            <span>khusniddinovuz@gmail.com</span>
          </li>
          <li>
            <i className='fas fa-map-marker-alt' />
            <span>Namangan shahri, I.Karimov ko'chasi</span>
          </li>
          <li>
            <i className='fas fa-link' />
            <span>bit.ly/nampmuz</span>
          </li>
        </ul>
      </div>
      <div className='footer-icons'>
        <a target='_blank' href='https://t.me/nampmuz'>
          <i className='fab fa-telegram' />
        </a>
        <a target='_blank' href='https://fb.com/nampmuz'>
          <i className='fab fa-facebook' />
        </a>
        <a target='_blank' href='https://instagram.com/nampmuz'>
          <i className='fab fa-instagram' />
        </a>
        <a target='_blank' href='https://twitter.com/nampmuz'>
          <i className='fab fa-twitter' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
