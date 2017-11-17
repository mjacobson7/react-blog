import React, { Component } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { AdminSideNav } from './AdminSideNav'; 
import { Footer } from './Footer';

export class GlobalSettings extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Header />
                <AdminSideNav />
                <Footer />
            </div>
        )
    }
}