import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className='Home'>
      <section className='showcase'>
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
      </section>
      <div className='features d-flex justify-content-evenly text-center'>
        <div data-aos='fade-right' className='card'>
          <div className='card-img-top'>
            <i className='fal fa-language' />
          </div>
          <div className='card-body'>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </p>
          </div>
        </div>
        <div data-aos='zoom-in-down' className='card'>
          <div className='card-img-top'>
            <i className='fal fa-school' />
          </div>
          <div className='card-body'>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </p>
          </div>
        </div>
        <div data-aos='fade-left' className='card'>
          <div className='card-img-top'>
            <i className='fal fa-globe'></i>
          </div>
          <div className='card-body'>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </p>
          </div>
        </div>
        <div data-aos='fade-up-right' className='card'>
          <div className='card-img-top'>
            <i className='fal fa-users' />
          </div>
          <div className='card-body'>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </p>
          </div>
        </div>
        <div data-aos='zoom-in-up' className='card'>
          <div className='card-img-top'>
            <i className='fal fa-laptop-code' />
          </div>
          <div className='card-body'>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </p>
          </div>
        </div>
        <div data-aos='fade-up-left' className='card'>
          <div className='card-img-top'>
            <i className='fal fa-book-reader' />
          </div>
          <div className='card-body'>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quis quasi quas, in nihil quidem?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
