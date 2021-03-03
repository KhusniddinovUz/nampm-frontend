import React from 'react';
import logo from '../logo.jpg';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar sticky-top d-flex align-items-center justify-content-around'>
      <div className='d-flex align-items-center'>
        <img src={logo} alt='PS Logo' width='50' className='m-1' />
        Namangan Presidential School
      </div>
      <div className='navs d-flex align-items-center justify-content-evenly'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/news'>News</NavLink>
        <NavLink to='/admission'>Admission</NavLink>
        <div className='animation start-home'></div>
      </div>
    </nav>
  );
};

export default Navbar;
