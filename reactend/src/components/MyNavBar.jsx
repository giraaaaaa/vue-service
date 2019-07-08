import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import App from '../containers/App'
import Login from '../containers/customer/Login'
import Join from '../containers/customer/Join'
import Mypage from '../containers/customer/Mypage'
import Home from '../containers/common/Home'
import Hello from '../containers/customer/Hello.jsx'
import LightSwitch from '../containers/customer/LightSwitch.jsx'
import Timer from '../containers/common/Timer.jsx'
import TodoAdd from '../containers/customer/TodoAdd.jsx'
import Clock from '../containers/common/Clock.jsx'
const MyNavBar =()=>{
   return( 
   <Router>
   <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">비트캠프</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#">
        <Link to="/home">Home</Link>
        </Nav.Link>
        <Nav.Link href="#">
        <Link to="/hello">Hello</Link>
        </Nav.Link>
        
        <Nav.Link href="#link">
        <Link to="/Todoadd">스케쥴러</Link>

        </Nav.Link>
        <NavDropdown title="회원관리" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">
            <Link to="/Join">회원가입</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
            <Link to="/Login">로그인</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
            <Link to="/Mypage">마이페이지</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
            <Link to="/timer">Timer</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
            <Link to="/lightswitch">LightSwitch</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
            <Link to="/Clock">시 계</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
            <Link to="/Remove">회원탈퇴</Link>
            </NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>
        <Route path="/join" exact component={Join}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/mypage" exact component={Mypage}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/hello" exact component={Hello}></Route>
        <Route path="/lightswitch" exact component={LightSwitch}></Route>
        <Route path="/timer" exact component={Timer}></Route>
        <Route path="/todoadd" exact component={TodoAdd}></Route>
        <Route path="/clock" exact component={Clock}></Route>
    </Router>
   )
}

export default MyNavBar