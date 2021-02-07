import React from 'react';
import logo from '../logo.jpg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar d-flex align-items-center justify-content-around'>
      <div className='d-flex align-items-center'>
        <img src={logo} alt='PS Logo' width='50' className='m-1' />
        Presidential School
      </div>
      <div className='navs d-flex align-items-center justify-content-evenly'>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/news'>News</a>
        <a href='/admission'>Admission</a>
      </div>
    </div>
  );
};

export default Navbar;
