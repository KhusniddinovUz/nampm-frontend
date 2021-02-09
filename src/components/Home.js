import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
      <div className='showcase'>
        <div className='showcase-text container'>
          <h1>Presidential School In Namangan</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            ut totam animi blanditiis saepe vel.
          </p>
          <NavLink to='/about' className='button mt-3'>
            About
          </NavLink>
        </div>
        <div className='news'></div>
      </div>
      <div className='features d-flex justify-content-center text-center'>
        <div data-aos='fade-right' className='card'>
          <div className='card-img-top'>
            <i className='fas fa-language' />
          </div>
          <div className='card-body'>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </div>
          </div>
        </div>
        <div data-aos='zoom-in-down' className='card'>
          <div className='card-img-top'>
            <i className='fas fa-school' />
          </div>
          <div className='card-body'>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </div>
          </div>
        </div>
        <div data-aos='fade-left' className='card'>
          <div className='card-img-top'>
            <i className='fas fa-globe'></i>
          </div>
          <div className='card-body'>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </div>
          </div>
        </div>
        <div data-aos='fade-up-right' className='card'>
          <div className='card-img-top'>
            <i className='fas fa-users' />
          </div>
          <div className='card-body'>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </div>
          </div>
        </div>
        <div data-aos='zoom-in-up' className='card'>
          <div className='card-img-top'>
            <i className='fas fa-laptop-code' />
          </div>
          <div className='card-body'>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </div>
          </div>
        </div>
        <div data-aos='fade-up-left' className='card'>
          <div className='card-img-top'>
            <i className='fas fa-book-reader' />
          </div>
          <div className='card-body'>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
