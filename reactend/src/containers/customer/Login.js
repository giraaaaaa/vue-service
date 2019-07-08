import React, {Component}  from 'react';
import {Form, Button} from 'react-bootstrap';
import { tsConstructorType } from '@babel/types';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId : '',
            password : ''
        }
    }
    render(){
        
        return(
            <div>
                <h2>로그인</h2>
                <Form>
                <Form.Group controlId="customerId">
                    <Form.Label>CUSTOMER ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success">확인</Button>
                <Button variant="secondary">취소</Button>

                </Form>
            </div>
        )
    }
}

export default Login