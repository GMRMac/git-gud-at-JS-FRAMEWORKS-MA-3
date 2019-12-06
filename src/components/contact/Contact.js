import React from "react";
import Heading from "../layout/Heading";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import FormControl from "react-bootstrap/formcontrol";
import Col from "react-bootstrap/col";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

export default function Contact(){
    return(
        <Col sm={{span:6, offset: 3}}>
            <Heading title="Contact us" />
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" required/>
                </Form.Group>
        
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <FormControl as="textarea" aria-label="With textarea" required/>
                </Form.Group>
                <NavLink to="/" exact>
                    <Button variant="primary" type="submit"> Submit </Button>
                </NavLink>
            </Form>
        </Col>
    );
}