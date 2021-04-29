import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

    const AdminLog = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://team4-our-e-commerce-app.herokuapp.com/open_sesame/aladdin", {
            method: "POST",
            body: JSON.stringify({admin: {email: email, password: password}}),
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
        <div class="adminWrapper">
            <div className="adminLogin">
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
        </div>
    )
}

export default AdminLog;