import React, { Component } from 'react';
import { Footer } from './Footer';
import axios from 'axios';

axios.get('/api/injuries').then((response) => { console.log(response)});

export class SignIn extends Component {

  render() {
    return (
      <div className="App">
        <div class="container">

    <form class="form-signin">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-sm btn-primary btn-block" type="submit">Sign in</button>
    </form>

  </div>
        {/* <div class="container">
          <div class="row">
            <div class="col"></div>
              <div class="col">
              <form class="form-signin">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
            </div>
            <div class="col"></div>
            </div>
            </div> */}
         <hr/>
         <Footer />
      </div>
    );
  }
}
