import React from "react";
import { Card, Badge, Button } from 'react-bootstrap';

function TripCard({ data }) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">  
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                </div>
            </Card.Body>
            <Card.Img variant="top" src={data.image} /> 
        </Card>
    )
}

export default TripCard