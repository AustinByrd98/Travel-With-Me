import React from "react";
import { Card } from 'react-bootstrap';
// import { link } from 'react-router-dom';

function TripCard({ data }) {
    return (
        <div className="trip-card">
        {/* <link to={'/trip/${data.id}'}> */}
        <Card style={{ width: '25rem' }} className="h-80 shadow-sm bg-white rounded">  
            <Card.Body className="Card-body">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">Trip Title</Card.Title>
                    <Card.Img variant="top" src="https://www.museumofplay.org/app/uploads/2021/08/rubber-duck-sq.jpg" alt="img.array"></Card.Img>
                    <Card.Text className="mt-auto">$3,000</Card.Text>
                </div>
            </Card.Body>
        </Card>
        {/* </link> */}
        </div>
    )
}

export default TripCard