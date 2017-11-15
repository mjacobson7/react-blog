import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { ArticleList } from './ArticleList';
import { Footer } from './Footer';

export class Home extends Component {
  render() {
    return (
      <div className="App">
         <Navigation />
         <Header />
         <ArticleList />
         <hr/>
         <Footer />
      </div>
    );
  }
}
