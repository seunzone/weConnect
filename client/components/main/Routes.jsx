import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConnectHome  from './Home';
import NotFound from '../common/NotFound';
import Business from '../businesses/Business';
import SingleBusiness from '../businesses/SingleBusiness';
import AddNewBusiness from '../businesses/AddBusinessParent';
import EditBusiness from '../businesses/EditBusinessParent';
import Dashboard from '../user/UserDashboard';
import Signin from '../auth/Signin';

export const Main = () => (
    <div>
      <Switch>
        <Route exact path="/" component={ ConnectHome } />
        <Route path="/business" exact component={ Business } />
        <Route path="/business/view/:id" exact component={ SingleBusiness } />
        <Route path="/businesses/add" exact component= { AddNewBusiness } />
        <Route path="/businesses/edit/:id" exact component={ EditBusiness } />
        <Route path="/dashboard" exact component={ Dashboard } />
        <Route path="/signin" exact component={ Signin } />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
  
export { Main as Router };
  