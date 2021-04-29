import React, {useState, useEffect} from 'react';
import SignupLogin from "./SignupLogin";
import {Link} from "react-router-dom";
import LogoImg from "./keyStroke.png";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = (props) =>{
    const [sessionToken, setSessionToken] = useState('');
  
    useEffect(() => {
      if(localStorage.getItem('token')){
        let token = localStorage.getItem('token');
        setSessionToken(token);
      }
    }, [])
  
    const updateToken = (newToken) => {
      localStorage.setItem('token', newToken);
      setSessionToken(newToken);
      //console.log(sessionToken)
    }
  
    const clearToken = () => {
      localStorage.clear();
      setSessionToken('');
      alert("User successfully logged out.")
    }

  return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#ecebea"}}>
        <div className="container-fluid">
        <Link to="/">
            <a className="navbar-brand">
              <img id="logo" src={LogoImg} alt="company logo: Key Stroke, word Keystroke with key icon"/>
            </a>
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">

                    <li className="nav-item">
                    <Link to="/about">Our Story</Link>
                        </li>
                    
                    <li className="nav-item">
                    <Link to="/shop">Shop</Link>
                    </li>

                    <li className="nav-item">
                         <div className="nav-link"><SignupLogin updateToken = {updateToken} clearToken={clearToken} /></div>
                         
                    </li>
                    <li className="nav-item">
                    <Link to="/cart" >
                        <img id="shoppingBag" src="https://img.icons8.com/ios/452/shopping-bag--v1.png"/>
                    </Link>
                    </li>    
            </ul>
            </div>
        </div>
      </nav>
    </div>
    )
}

export default Navbar;