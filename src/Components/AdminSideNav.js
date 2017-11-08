import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AdminSideNav extends Component {
    constructor(props) {
        super();
        this.state = {
            active: false
        }
    }

    toggleClass() {        
        var currentState = this.state.active;
        this.setState({ active: !currentState})
        console.log(this.state.active);
    }
    render() {
        return (
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">Overview</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/new-post" className="nav-link">New Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Analytics</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/global-settings" className="nav-link">Global Settings</Link>
                    </li>
                </ul>
            </nav>
        )
  }
}