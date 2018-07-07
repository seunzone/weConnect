import React from 'react';
import { Link } from 'react-router-dom';
import HomeFooter from '../extras/HomeFooter';

const NotFound = () => (
  <div>
    <div className="container not-found">
      <div className="row justify-content-center text-center">
        <div className="col-md-4 col-lg-4 col-xs-4">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <h3>A beast ate this page, durh</h3>
          <Link to="/">Go back home</Link>
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
);

export default NotFound;
