import React, { Component } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { AdminSideNav } from './AdminSideNav'; 

export class GlobalSettings extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Header />
                <AdminSideNav />
            </div>
        )
    }
}