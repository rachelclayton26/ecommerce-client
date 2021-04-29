import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';

const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();

        if(password.length <5 || password.length > 25 ){
            alert ('Please enter a password between 5 and 25 characters')
        } else {

        fetch(`${APIURL}/user/register`, {
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
            // }).then((response) => response.json()
        })
            .then((response)=> {
                if (response.status !== 201) {
                    alert("Unable to register.")
                } else {
                    props.updateToken(response.json().sessionToken)  
                    alert("Succesfully registered user!")
                    //redirect to shopping cart (.navigate?)
                }
            }).catch(error => console.log(error))
    }}
    

    return (
        <div>
        <div className="adminTitle">Register</div>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label htmlFor = "firstName"></Label>
                    <Input placeholder="First Name" onChange = {(e) => setFirstName(e.target.value)} name = "firstName" value = {firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = "lastName"></Label>
                    <Input placeholder="Last Name" onChange = {(e) => setLastName(e.target.value)} name = "lastName" value = {lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = "email"></Label>
                    <Input placeholder="Email" onChange = {(e) => setEmail(e.target.value)} name = "email" value = {email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = "password"></Label>
                    <Input placeholder = "Password-- Between 5 and 25 chacaters" onChange = {(e) => setPassword(e.target.value)} name = "password" value = {password}  title="password must be between 5-25 characters long"/>
                </FormGroup>
                 <Button className="adminButton" type = "submit">Register</Button> 
 </Form>
</div>
    )}

export default Register;
