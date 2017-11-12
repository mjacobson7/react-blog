import React, { Component } from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';

import { Footer } from './Footer';

export class Contact extends Component {
  render() {
    return (
      <div className="App">
         <Navigation />
         <Header />
         <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!</p>
              {/* <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
              <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
              <!-- NOTE: To use the contact form, your site must be on a live web host with PHP! The form will not work locally! --> */}
              <form name="sentMessage" id="contactForm" novalidate>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Message</label>
                    <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <br />
                <div id="success"></div>
                <div className="form-group">
                  <button type="submit" className="btn btn-secondary" id="sendMessageButton">Send</button>
                </div>
              </form>
            </div>
          </div>
         </div>
         <hr/>
         <Footer />
      </div>
    );
  }
}
