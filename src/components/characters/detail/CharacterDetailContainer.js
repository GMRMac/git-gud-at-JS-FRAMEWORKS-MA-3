import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../../constants/API";
import "./CharacterDetail.css";
import CharacterDetail from "./CharacterDetail.js";

export default class CharacterDetailContainer extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
    }
    
    state = {
        details: null,
        loading: true,
    };
    
    async componentDidMount(){
        //get the id fro mthe URL
        const { id } = this.props.match.params
        //create the URL string
        const url = `${BASE_URL}/${id}`;
        
        try {
            const response = await fetch(url);
            const json = await response.json();
//            console.log(json)
            this.setState({
                details: json,
                loading: false
            })
        }
        catch (error){
            console.log(error)
            this.setState({
                loading: false
            })
        }
/*        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    details: json,
                    loading: false
                })*/
//            .catch(error => {
//                    console.log(error)
//                    
//                    this.setState({
//                        loading: false
//                    })
//                });
//        })
    }

    render(){
        const {loading, details} = this.state;
        
        if (loading || !details){
            return <Spinner animation="border" className="spinner"/>;
        }
        
        return <CharacterDetail details={details} />
    }
}