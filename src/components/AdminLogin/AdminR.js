import React, {useState, useEffect} from 'react';
import AdminReg from './AdminReg';

const AdminR = () => {
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

    return(
        <div className="signinAdmin">
          <AdminReg updateToken={updateToken}/>
        </div>
    );
};
export default AdminR;
