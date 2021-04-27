import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
          <Navbar />
      <div className="wrapper">
        <div className="splash">
          <div className="splashBox">
            <div className="header"></div>
            <img id="splashImg" src="https://mir-s3-cdn-cf.behance.net/projects/original/28289860103571.Y3JvcCwxNTM3LDEyMDMsMCww.jpg"></img>
            <div id="splashTitle">Hello</div>
          </div>
        </div>
        <div className="shop">
          <div className="shopTitle">Shop</div>
        </div>
        <div className="footer">
          <div className="copyright">The Fantastic Four  |  Copyright 2021</div>
        </div>
      </div>
    </div>
  );
}

export default App;
