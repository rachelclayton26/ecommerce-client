import React, {useState} from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
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
      <Button color="danger" type="login" onClick={toggle}>Login</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Welcome back! Sign in for your saved cart!</ModalHeader> 
        <ModalBody>
          <Login updateToken={updateToken} clearToken={clearToken}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>

      <Button color="danger" onClick={toggle1}>Register</Button>
      <Modal isOpen={modal1} toggle={toggle1} className={className}>
        <ModalHeader toggle={toggle1}>We're so happy you're here - register with us to save your cart for easy access when you login in next time!</ModalHeader>
        <ModalBody>
          <Register updateToken = {updateToken}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      <Button color="danger" onClick={clearToken}>Logout</Button>
    </div>
  );
}

export default SignupLogin;