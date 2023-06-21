import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  let navigate=useNavigate()
  let btn=()=>{
      navigate("/")
  }
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home" onClick={btn}>User Registration</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header
