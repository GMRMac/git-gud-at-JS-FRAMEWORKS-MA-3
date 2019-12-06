import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function DetailList({
    gender,
    species,
    status,
    episodes,
    location,
}){
    const NumberOfEpisodes = episodes.length;
    const {name: locationName} = location;
    const {name: originName} = location;
    
    return (
        <ListGroup>
            <ListGroup.Item>
                <b>Gender</b>: {gender}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Status</b>: {status}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Episodes</b>: {NumberOfEpisodes}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Location</b>: {locationName}
            </ListGroup.Item>
            <ListGroup.Item>
                <b>Origin</b>: {originName}
            </ListGroup.Item>
        </ListGroup>
    )
}

DetailList.propTypes = {
    gender: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    episodes: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    origin: PropTypes.object.isRequired,
};