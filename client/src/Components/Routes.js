import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from '../Components/Home';
import { About } from '../Components/About';
import { Contact } from '../Components/Contact';
import { Admin } from '../Components/Admin';
import { SignIn } from '../Components/SignIn';
import { NewPost } from '../Components/NewPost';
import { GlobalSettings } from '../Components/GlobalSettings';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/sign-in" exact component={SignIn}/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/admin" exact component={Admin}/>
      <Route path="/admin/new-post" exact component={NewPost}/>
      <Route path="/admin/global-settings" exact component={GlobalSettings}/>
    </Switch>
  </BrowserRouter>
);
