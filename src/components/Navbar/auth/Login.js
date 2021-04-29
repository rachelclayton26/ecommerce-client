import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
//import loginImg from "../components/navbar/assets/LoginImg.jpg"

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://team4-our-e-commerce-app.herokuapp.com/user/login", {
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
             <h1>Login</h1>
            <Form onSubmit = {handleSubmit}> 
                <FormGroup>
                    <Label htmlFor = "email">Email</Label>
                    <Input onChange = {(e) => setEmail(e.target.value)} name = "email" value={email}/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor = "password">Password</Label>
                <Input onChange = {(e) => setPassword(e.target.value)} name = "password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form> 
        </div>
    )
}

export default Login;