import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className="masthead" style={{backgroundImage: "url('../assets/home-bg.jpg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{this.props.blogName}</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
