import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CharacterDetailContainer from "../characters/detail/CharacterDetailContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact"
import "./Layout.css"

export default function Layout() {
    return (
        <Router>
            <Navbar variant="dark" expand="lg">
                <NavLink to="/" exact>    
                    <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                        <NavLink to="/about/" className="nav-link">About</NavLink>
                        <NavLink to="/contact/" className="nav-link">Contact us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/character/:id" component={CharacterDetailContainer} />
        
                </Switch>
            </Container>
        </Router>
    );
}