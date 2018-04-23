import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConnectHome  from './Home';
import NotFound from '../common/NotFound';
import Business from '../businesses/Business';
import SingleBusiness from '../businesses/SingleBusiness';
import AddNewBusiness from '../businesses/AddBusiness';

export const Main = () => (
    <div>
      <Switch>
        <Route exact path="/" component={ AddNewBusiness } />
        {/* <Route path="/business" exact component={ Business } />
        <Route path="/business/view/:id" exact component={ SingleBusiness } />
        <Route path="/businesses/add" exact component={ AddNewBusiness } />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
  
export { Main as Router };
  