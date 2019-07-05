import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
const MyNavBar =()=>{
   return( <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">비트캠프</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">스케쥴러</Nav.Link>
        <NavDropdown title="회원가입" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">회원관리</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">이잉</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>
   )
}

export default MyNavBar