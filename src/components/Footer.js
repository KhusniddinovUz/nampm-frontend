import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='footer-content'>
        <div class='footer-section about pr-0'>
          <h1 className='text-center mb-3'>Presidential School</h1>
          <p className='p-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            eveniet facilis unde non explicabo expedita sint totam dolorem a
            eaque.
          </p>
          <div className='contact'>
            <div className='p-1'>
              <i class='fas fa-phone'></i> &nbsp; 99 XXX XX XX
            </div>
            <div className='p-1'>
              <i class='fas fa-envelope'></i> &nbsp; khusniddinovuz@gmail.com
            </div>
            <div className='p-1'>
              <i class='fas fa-map-marker-alt'></i> &nbsp; Nam City, I.Karimov 1
            </div>
          </div>
        </div>

        <div class='footer-section links'>
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
              <NavLink to='/admission'>Addmission</NavLink>
            </li>
          </ul>
          <div class='socials'>
            <a href='#' id='fb' target='_blank'>
              <i class='fab fa-facebook'></i>
            </a>
            <a href='#' id='insta' target='_blank'>
              <i class='fab fa-instagram'></i>
            </a>
            <a href='#' id='twitter' target='_blank'>
              <i class='fab fa-twitter'></i>
            </a>
            <a href='#' id='tube' target='_blank'>
              <i class='fab fa-youtube'></i>
            </a>
          </div>
        </div>

        <div class='footer-section contact-form'>
          <h2 className='text-center mb-4'>Contact us</h2>
          <form className='form-group'>
            <input
              type='email'
              className='contact-input mb-2'
              placeholder='Email address'
            />
            <textarea
              rows='4'
              className='contact-input'
              placeholder='Message'
            ></textarea>{' '}
            <br />
            <button type='submit' class='button'>
              <i class='fas fa-envelope'></i>
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
