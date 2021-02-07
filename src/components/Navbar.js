import React from 'react';
import logo from '../logo.jpg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div>
        <img src={logo} alt='PS Logo' width='50' />
        Presidential School
      </div>
      <div className='navs'>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/news'>News</a>
        <a href='/admission'>Admission</a>
      </div>
    </div>
  );
};

export default Navbar;
