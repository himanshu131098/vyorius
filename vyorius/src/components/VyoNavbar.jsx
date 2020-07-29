import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../App.css"

function VyoNavbar()
{
    return(
        <Navbar>
            <Navbar.Brand >
            <img class="logo" src="https://i.pinimg.com/originals/f1/e0/c0/f1e0c0588382fa456e46b464c964e9ff.jpg" alt="Logo-Vyorius" />
             VYORIUS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#why">Why Vyorius?</Nav.Link>
            <Nav.Link href="#solution">Solution</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#cases">Use Cases</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
            <Nav.Link href="#contact">Contact-Us</Nav.Link> 
            </Nav>
            </Navbar.Collapse>
            <Button className="launch">Launch Vyorius</Button>
        </Navbar>
    );
}

export default VyoNavbar;