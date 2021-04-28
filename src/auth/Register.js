import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
//import loginImg from "../components/navbar/assets/LoginImg.jpg"

const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: "POST",
            body: JSON.stringify({user: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password 
            }}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
            }).then((response) => response.json()
            ).then((data)=> {
                props.updateToken(data.sessionToken)
            }).catch(error => console.log(error))
        }
    

    return (
        <div>
        <h1>Register</h1>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor = "firstName">First Name</Label>
                    <Input onChange = {(e) => setFirstName(e.target.value)} name = "firstName" value = {firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = "lastName">Last Name</Label>
                    <Input onChange = {(e) => setLastName(e.target.value)} name = "lastName" value = {lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = "email">Email</Label>
                    <Input onChange = {(e) => setEmail(e.target.value)} name = "email" value = {email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = "password">Password</Label>
                    <Input onChange = {(e) => setPassword(e.target.value)} name = "password" value = {password}  title="password must be between 5-25 characters long"/>
                </FormGroup>
                 <Button type = "submit">Register</Button> 
 </Form>
</div>
    )}

export default Register;






// {pattern={5,25} title="password must be between 5-25 characters long" />}