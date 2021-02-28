import { NavLink } from 'react-router-dom';
import './Footer.scss';
import { useState, useRef } from 'react';
import axios from 'axios';
import { url } from '../data/url';

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const email = useRef('noone@gmail.com');
  const message = useRef('Nothing to say');

  const onSubmit = (e) => {
    e.preventDefault();
    const mail = { email: email.current.value, message: message.current.value };
    setLoading(true);
    axios
      .post(`${url}/sendmessage/`, mail)
      .then(() => {
        setLoading(false);
        email.current.value = '';
        message.current.value = '';
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about pr-0'>
          <h1 className='text-center mb-3'>Presidential School</h1>
          <p className='p-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            eveniet facilis unde non explicabo expedita sint totam dolorem a
            eaque.
          </p>
          <div className='contact'>
            <div className='p-1'>
              <i className='fas fa-phone'></i> +69 226 56 46
            </div>
            <div className='p-1'>
              <i className='fas fa-envelope'></i> info.nampm@gmail.com
            </div>
            <div className='p-1'>
              <i className='fas fa-map-marker-alt'></i> Namangan shahar,
              I.Karimov 1
            </div>
          </div>
        </div>

        <div className='footer-section links'>
          <h2 className='text-center mb-2'>Quick Links</h2>
          <ul>
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/news'>News</NavLink>
            </li>
            <li>
              <NavLink to='/admission'>Admission</NavLink>
            </li>
          </ul>
          <div className='socials'>
            <a href='https://facebook.com/nampmuz' id='fb' target='_blank'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='https://instagram.com/nampmuz' id='insta' target='_blank'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='https://twitter.com/nampmuz' id='twitter' target='_blank'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='https://bit.ly/nampmuz' id='tube' target='_blank'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>

        <div className='footer-section contact-form'>
          <h2 className='text-center mb-4'>Contact Us</h2>
          <form className='form-group' onSubmit={onSubmit}>
            <input
              ref={email}
              required={true}
              type='email'
              className='contact-input mb-2'
              placeholder='Email address'
            />
            <textarea
              ref={message}
              required={true}
              rows='4'
              className='contact-input'
              placeholder='Message'
            ></textarea>{' '}
            <br />
            <button type='submit' className='button'>
              <i className='fas fa-envelope' hidden={loading ? 'hidden' : ''} />
              <span hidden={loading ? 'hidden' : ''}>Send</span>
              <span
                className='spinner-border spinner-border-sm'
                role='status'
                aria-hidden='true'
                hidden={loading ? '' : 'hidden'}
              />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
