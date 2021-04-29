import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

    const AdminLog = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/open_sesame/aladdin`, {
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
            <div class="adminBox">
                <div className="adminLogin">
                <div className="adminTitle">Login</div>
                    <Form onSubmit = {handleSubmit}> 
                        <FormGroup>
                            <Label className="adminLable" htmlFor = "email"></Label>
                            <Input placeholder="Email" onChange = {(e) => setEmail(e.target.value)} name = "email" value={email}/>
                        </FormGroup>
                        <FormGroup>
                        <Label className="adminLable" htmlFor = "password"></Label>
                        <Input placeholder="Password" onChange = {(e) => setPassword(e.target.value)} name = "password" value={password}/>
                        </FormGroup>
                        <Button className="adminButton" type="submit">Submit</Button>
                    </Form> 
                </div>
            </div>
        </div>
    )
}

export default AdminLog;