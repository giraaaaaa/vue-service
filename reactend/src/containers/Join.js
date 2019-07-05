import React, {Component}  from 'react'
import {Form,Button } from 'react-bootstrap'
class Join extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId : '',
            password : '',
            address : '',
            name : '',
            phone : '',
            city : ''
            
        }
    }
    render(){
        return(
            <Form>
                <h2>회원가입</h2>
                <Form.Group controlId="customerId">
                <Form.Label>customerId</Form.Label>
                <Form.Control type="customerId" placeholder="customerId" />
                </Form.Group>

                <Form.Group controlId="password">
                <Form.Label>password</Form.Label>
                <Form.Control type="password" placeholder="password" />
                </Form.Group>

            <Form.Group controlId="name">
                <Form.Label>name</Form.Label>
                <Form.Control placeholder="name" />
            </Form.Group>

            <Form.Group controlId="phone">
                <Form.Label>phone</Form.Label>
                <Form.Control placeholder="phone" />
            </Form.Group>

            <Form>
                <Form.Group controlId="city">
                <Form.Label>city</Form.Label>
                <Form.Control />
                </Form.Group>


            </Form>

  

            <Button variant="primary" type="submit">
                가~입
            </Button>
            </Form>
        )
    }
}

export default Join