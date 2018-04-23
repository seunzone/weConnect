import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConnectHome  from './Home';
import NotFound from '../common/NotFound';
import Business from '../businesses/Business';

export const Main = () => (
    <div>
      <Switch>
        <Route exact path="/" component={ ConnectHome } />
        <Route path="/businesses" exact component={ Business } />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
  
export { Main as Router };
  