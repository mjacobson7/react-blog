import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header'; 
import { AdminSideNav } from './AdminSideNav'

export class NewPost extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Header/>
                <div>New Post Page</div>
                <AdminSideNav/>
            </div>
        )
    }
}