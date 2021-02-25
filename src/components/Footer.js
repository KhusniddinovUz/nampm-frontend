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
              <NavLink to='/admission'>Admission</NavLink>
            </li>
          </ul>
          <div class='socials'>
            <a href='https://facebook.com/nampmuz' id='fb' target='_blank'>
              <i class='fab fa-facebook'></i>
            </a>
            <a href='https://instagram.com/nampmuz' id='insta' target='_blank'>
              <i class='fab fa-instagram'></i>
            </a>
            <a href='https://twitter.com/nampmuz' id='twitter' target='_blank'>
              <i class='fab fa-twitter'></i>
            </a>
            <a href='https://bit.ly/nampmuz' id='tube' target='_blank'>
              <i class='fab fa-youtube'></i>
            </a>
          </div>
        </div>

        <div class='footer-section contact-form'>
          <h2 className='text-center mb-4'>Contact Us</h2>
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
