import React from "react";
import Col from "react-bootstrap/Col";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import PropTypes from "prop-types";
import "./Breadcrumb.css";

export default function Breadcrumb({name}){
    return(
        <p>
            <NavLink to ="/">Home</NavLink> / {name}
        </p>
    )
}

Breadcrumb.propTypes = {
    name: PropTypes.string.isRequired,
}