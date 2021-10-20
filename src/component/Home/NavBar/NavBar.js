import React from 'react';
import {  Container,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'
import './Navber.css'



const NavBar = () => {
  const {user,signOutt} = useAuth()
    return (
        <Navbar bg="primary" variant="dark" expand="lg navber">
  <Container>
    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9r6ZKcK_H3k29LtoAi8qC3NI9turJBswSZZtE7XJr_YIQNI9Xlh6WROv41RETiFeSbTk&usqp=CAU" alt="" />
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home" className="fs-2 fw-bold">Home</Nav.Link>
        <Nav.Link href="/service" className="fs-2 fw-bold">Service</Nav.Link>
        <Nav.Link href="/" className="fs-2 fw-bold">About</Nav.Link>

        <h5>{user?.displayName || 'empty user'}</h5>
        <img style={{height:'50px',width:'50px',borderRadius:'50px'}} src={user.photoURL || 'Broken img'} alt="" />
        {
          user.email ? <Nav.Link as={Link} onClick={signOutt} to="/log" className="fs-2 fw-bold">Log out</Nav.Link> : <Nav.Link as={Link} to="/log" className="fs-2 fw-bold">Log in</Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavBar;