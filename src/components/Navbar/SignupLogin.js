import React, {useState} from 'react';
import Register from './auth/Register';
import Login from './auth/Login';
//import image from './assets/LoginImg.jpg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SignupLogin = (props) => {
  const {
    updateToken,
    clearToken,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle1 = () => setModal1(!modal1)


  return (
    <div>
      <Button style={{fontFamily: 'Open Sans', backgroundColor:"#ffffff00", border:"0pt solid #ffffff00", color:"#c75a00", }} type="login" onClick={toggle}>Login</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Welcome back! Sign in for your saved cart!</ModalHeader> 
        <ModalBody>
          <Login updateToken={updateToken} clearToken={clearToken}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>

      <Button style={{fontFamily: 'Open Sans', backgroundColor:"#ffffff00", border:"0pt solid #ffffff00", color:"#c75a00"}} onClick={toggle1}>Register</Button>
      <Modal isOpen={modal1} toggle={toggle1} className={className}>
        <ModalHeader toggle={toggle1}>Register with us to save your cart!</ModalHeader>
        <ModalBody>
          <Register updateToken = {updateToken}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      <Button style={{fontFamily: 'Open Sans', backgroundColor:"#ffffff00", border:"0pt solid #ffffff00", color:"#c75a00"}} onClick={clearToken}>Logout</Button>
    </div>
  );
}

export default SignupLogin;