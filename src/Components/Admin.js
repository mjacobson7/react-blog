import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Footer } from './Footer';

export class Admin extends Component {
  fart: ['poopy'];
  render() {
    return (
      <div className="App">
         <Navigation />
         <Header fart={this.fart}/>
         <label>
           Name of Blog:
           <input value={this.props.blogName} onChange={this.props.onChange}/>
         </label>
         <hr/>
         <Footer />
      </div>
    );
  }
}
