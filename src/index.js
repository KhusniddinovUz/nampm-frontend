import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';

AOS.init({
  duration: 1000,
  once: false,
  offset: 130,
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
