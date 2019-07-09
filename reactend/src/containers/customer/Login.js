import React, {Component}  from 'react';
import {Form, Button} from 'react-bootstrap';
// import { tsConstructorType } from '@babel/types';
import axios from 'axios'
class Login extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         customerId : '',
    //         password : ''
    //     }
    // }
    render(){
        
        return(
            <div>
                <h2>로그인</h2>
                <Form>
                <Form.Group controlId="customerId">
                    <Form.Label>CUSTOMER ID</Form.Label>
                    <input
                        type="text"
                        name="customerId"
                        onChange= {this.idChange}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>PASSWORD</Form.Label>
                    <input
                        type="text"
                        name="password"
                        onChange= {this.pwChange}
                    />
                </Form.Group>
                <Button variant="success" onClick={this.login}>확인</Button>
                <Button variant="secondary">취소</Button>

                </Form>
            </div>
        )
    }
    idChange =(e)=>{
        this.setState({customerId: e.target.value})
    }
    pwChange =(e)=>{
        this.setState({password: e.target.value})
    }
    login =()=>{
        let data = {
            customerId : this.state.customerId,
            password : this.state.password
        }
        let headers = {
            'Content-Type': 'application/json',
            'Authorization' : 'JWT fefege..'
          }
        alert('로그인 버튼 클릭 !!!' + data.customerId+ ', pass : ' +data.password)
        axios.post('http://localhost:9000/customers/login',
                        JSON.stringify(data),
                        {headers: headers})
        .then(res =>{
            alert('login 성공')
        })
        .catch(e=>{
            alert(`login 실패`)
        })
    }
}

export default Login