import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';

import { Footer } from './Footer';

export class About extends Component {
  render() {
    return (
      <div className="App">
         <Navigation />
         <Header />
         <div className="container">
           <div className="row">
             <div className="col-lg-8 col-md-10 mx-auto">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae debitis nobis, quod sapiente qui voluptatum, placeat magni repudiandae accusantium fugit quas labore non rerum possimus, corrupti enim modi! Et.</p>
             </div>
           </div>
         </div>
         <hr/>
         <Footer />
      </div>
    );
  }
}
