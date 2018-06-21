import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'rc-pagination/assets/index.css';
import Header  from './common/Header';
import { Router } from './main/Routes';
import Footer from './common/Footer';
import '../public/styles/index.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Route component={Router} />
      <Route component={Footer} />
    </div>
  </BrowserRouter>
);

export default App;