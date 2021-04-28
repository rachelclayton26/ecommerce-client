import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import Footer from './components/site/Footer';
// import Header from './components/site/Header';
// import Sidebar from './components/site/Sidebar;'
import {
  BrowserRouter as Router 
} from 'react-router-dom';
import ShopItems from './components/site/Shop';


import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className="nav"> */}
          <Navbar />
      {/* </div> */}
      <div className="wrapper">
        <div className="splash">
          <div className="splashBox">
            <div className="header"></div>
            <img id="splashImg" src=""></img>
            <div id="splashTitle">Hello</div>
          </div>
        </div>
        <div className="shop">
          <div className="shopTitle">Shop</div>
          //Alec
          {/* <Shop /> */}
        </div>
        <div className="footer">
          <div className="copyright">The Fantastic Four  |  Copyright 2021</div>
        </div>
      </div>
    </div>
  );
}

export default App;
