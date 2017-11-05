import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <Link to="/home" className="navbar-brand" href="index.html">Start Bootstrap</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link" href="index.html">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="about.html">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="post.html">Sample Post</a>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="contact.html">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
