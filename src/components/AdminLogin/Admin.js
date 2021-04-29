import React, {useState, useEffect} from 'react';
import AdminLog from './AdminLogin';

const Admin = () => {
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
        <div className="signinAdmin">
          <AdminLog updateToken={updateToken} clickLogout={clearToken}/>
        </div>
    );
};
export default Admin;
