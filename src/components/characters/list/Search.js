import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/button";
    
export default function Search({ handleSearch,resetInput,inputEmpty }){
    return(
        <InputGroup className="search">
            <FormControl placeholder="Search by name..." onChange={event => handleSearch(event)} />
        </InputGroup>
    )
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    resetInput: PropTypes.func.isRequired,
    inputEmpty: PropTypes.string.isRequired,
}