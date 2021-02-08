import React from 'react';
import './Home.scss';
import showcase1 from '../images/Home/showcase1.jpg';

const Home = () => {
  return (
    <div className='Home'>
      <div className='showcase'>
        <img src={showcase1} alt='showcase' />
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
