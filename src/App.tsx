import React, {useState} from 'react';
import './App.css';
import logo from '../src/components/images/logo-yellow.png';
import facebook from './icons/facebook.png';
import email from './icons/email.png';
import linkedIn from './icons/linkedin.png';

//import react-router
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/header-pages/home';
import Demo from './components/header-pages/demo';
import Support from './components/header-pages/support';
import Contact from './components/header-pages/contact';
import Error from './components/header-pages/errorpage';
import AWS from "aws-sdk";


const App:React.FunctionComponent = ():JSX.Element => {

  AWS.config.region= process.env.REACT_APP_REGION as string
  AWS.config.credentials = new AWS.CognitoIdentityCredentials( {
      IdentityPoolId: process.env.IdentityPoolId as string
  })


  return (
    <Router>
      <div className="header">
        <div className='header-content'>
          <h1 className='title'>
            <img src={logo} alt="logo" id='logo'/>
              R'Face Detector
            </h1>
            <div className="barnav">
              <ul className='menu-list'>
                <li><Link to="/home" className='menu'>HOME</Link></li>
                <li><Link to="/demo" className='menu'>DEMO</Link></li>
                <li><Link to="/support" className='menu'>SUPPORT</Link></li>
                <li><Link to="/contact" className='menu'>CONTACT</Link></li>
              </ul>
            </div>
          </div>
        </div>
      <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path ="/home" element = {<Home/>} />
        <Route path ="/demo" element = {<Demo/>} />
        <Route path ="/support" element = {<Support/>} />
        <Route path ="/contact" element = {<Contact/>} />
        <Route path='*' element={<Error />}/>
      </Routes>
      <div className="menu-reseau">
        <div className="reseaux-sociaux">
          <div className="email">
            <a href="hei.roussel.2@gmail.com" className='link'>
              <img src={email} alt="email" id="logo-email"/>
              <span id='link-email'>hei.roussel.2@gmail.com</span>
            </a>
          </div>
          <div className="facebook">
            <a href="https://web.facebook.com/rotchel.rakoto/" className='link' >
              <img src={facebook} alt="facebook" id="logo-facebook"/>
              <span id='link-facebook'>https://web.facebook.com/rotchel.rakoto/</span>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/roussel-rakotonirina-0a326822b/" className='link'>
              <img src={linkedIn} alt="linkedin" id="logo-linkedin"/>
              <span id='link-linkedin'>https://www.linkedin.com/in/roussel-rakotonirina-0a326822b/</span>
            </a>
          </div>

        </div>
      </div>
    </Router>
    
  );
}

export default App;
