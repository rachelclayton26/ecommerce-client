import React, {useState, useEffect} from 'react';
import SignupLogin from "./SignupLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./Navbar.css";

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
      alert("User Successfully logged out!")
    }
    

  return(
       <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
       <a className="navbar-brand" href="#">E-Commerce Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                 <ul className="navbar-nav">
            
                     <li className="nav-item">
                     <a className="nav-link" href="#about">Our Story</a>
                     </li>

                     <li className="nav-item">
                         <a className="nav-link" href="#skills">Shop</a>
                         </li>
                    
                     <li className="nav-item">
                         <a className="nav-link" href="#portfolio"><SignupLogin updateToken = {updateToken} clickLogout={clearToken} /></a>
                         
                     </li>

                     <li className="nav-item">
                         <a className="nav-link" href="#portfolio">Cart</a>
                     </li>    
             </ul>
             </div>
         </div>
       </nav>  
     </div>
    )
}

export default Navbar;