import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { AdminSideNav } from './AdminSideNav';
import { BlogEntries } from './BlogEntries';

export class Admin extends Component {
  constructor(props) {
    super();
    this.state = {
      blogName: props.defaultBlogName
    }
  }

  onHandleChange(event) {
    this.setState({
      blogName: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header blogName={this.state.blogName}/>
        {/* <label>
          Name of Blog:
          <input value={this.state.blogName} onChange={(event) => this.onHandleChange(event)}/>
        </label> */}
        <div className="container-fluid">
          <div className="row">
            <AdminSideNav />
            <BlogEntries />
          </div>
        </div>
        <hr/>
        <Footer />
      </div>
    );
  }
}
