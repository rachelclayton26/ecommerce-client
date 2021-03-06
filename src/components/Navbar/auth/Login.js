import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';

//import loginImg from "../components/navbar/assets/LoginImg.jpg"

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then((response)=> {
            if (response.status !== 200) {
                alert("Unable to login.")
            } else {
                props.updateToken(response.json().sessionToken)  
                alert("Succesfully logged in!")
                //redirect to shopping cart (.navigate?)
            }
        }).catch(error => console.log(error))
}

    return(
        <div>
            <div className="adminTitle">Login</div>
            <Form onSubmit = {handleSubmit}> 
                <FormGroup>
                    <Label htmlFor = "email"></Label>
                    <Input placeholder="Email" onChange = {(e) => setEmail(e.target.value)} name = "email" value={email}/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor = "password"></Label>
                <Input placeholder="Password" onChange = {(e) => setPassword(e.target.value)} name = "password" value={password}/>
                </FormGroup>
                <Button className="adminButton" type="submit">Login</Button>
            </Form> 
        </div>
    )
}

export default Login;