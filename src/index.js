import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
  offset: 150,
});

ReactDOM.render(<App />, document.getElementById('root'));
