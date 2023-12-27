import React from "react";
import { Card, Badge, Button } from 'react-bootstrap';

export function Tripcard({ data }) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={data.image} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                </div>
            </Card.Body> 
        </Card>
    )
}

export default TripCard