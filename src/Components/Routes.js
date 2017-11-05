import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from '../Components/Home';
import { About } from '../Components/About';
import { Contact } from '../Components/Contact';
import { Admin } from '../Components/Admin';
import { SignIn } from '../Components/SignIn';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/admin" exact component={Admin}/>
      <Route path="/sign-in" exact component={SignIn}/>
    </Switch>
  </BrowserRouter>
);
