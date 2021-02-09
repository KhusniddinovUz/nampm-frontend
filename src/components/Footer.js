import { NavLink } from 'react-router-dom';
import './Footer.scss';
import tg from '../images/Footer/telegram.svg';
import fb from '../images/Footer/facebook.svg';
import insta from '../images/Footer/instagram.svg';
import tw from '../images/Footer/twitter.svg';

const Footer = () => {
  return (
    <footer className='Footer text-center pb-3'>
      <h1 className='mt-3 mb-4'>Presidential School In Namangan</h1>
      <div className='footer-links d-flex'>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/admission'>Admission</NavLink>
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
          <img width='60' height='60' src={tg} alt='Telegram' />
        </a>
        <a target='_blank' href='https://fb.com/nampmuz'>
          <img width='60' height='60' src={fb} alt='Facebook' />
        </a>
        <a target='_blank' href='https://instagram.com/nampmuz'>
          <img width='60' height='60' src={insta} alt='Instagram' />
        </a>
        <a target='_blank' href='https://twitter.com/nampmuz'>
          <img width='60' height='60' src={tw} alt='Twitter' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
