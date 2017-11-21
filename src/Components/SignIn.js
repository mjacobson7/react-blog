import React, { Component } from 'react';
import { Footer } from './Footer';
import { axios } from 'axios';


export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">

    <form className="form-signin">
      <h2 className="form-signin-heading">Please sign in</h2>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input onChange={(event, newValue) => this.setState({username: newValue})} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input onChange={(event, newValue) => this.setState({password: newValue})} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
      <div className="checkbox">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button onClick={(event) => this.handleClick(event)} className="btn btn-sm btn-primary btn-block" type="submit">Sign in</button>
    </form>

  </div>
        {/* <div class="container">
          <div class="row">
            <div class="col"></div>
              <div class="col">
              <form class="form-signin">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autoFocus />
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
