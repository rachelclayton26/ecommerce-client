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
          {/* <div className="shopCategory">
                    <li className="nav-item">
                    <a className="nav-link" href="#about">Category 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Category 2</a>
                        </li>  
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Category 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Category 4</a>
                    </li>  
          </div> */}
        </div>
        <div className="footer">
          <div className="copyright">The Fantastic Four  |  Copyright 2021</div>
        </div>
      </div>
    </div>
  );
}

export default App;
