import React from "react";
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function TripCard(props) {
    console.log(props)
    if (!props.trips) {
        return (
            <>
                <h2>loading</h2>
            </>
        )
    }


    const renderCard = (card, index) => {
        return (
            <div className="trip-card">
                <NavLink to={`/show/${card._id}`}>
                    <Card key={index} style={{ width: '25rem' }} className="h-80 shadow-sm bg-white rounded">
                        <Card.Body className="Card-body">
                            <Card.Title className="align-items-start">{card.tripName}</Card.Title>
                            <Card.Img variant="top" src="https://www.museumofplay.org/app/uploads/2021/08/rubber-duck-sq.jpg" alt="img.array"></Card.Img>
                            <Card.Text className="cardText">{card.budget}</Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            </div>
        )
    }
    return (
        <div className='Cards'>
            {props.trips.map((card, index) => renderCard(card, index))}
        </div>)

}

export default TripCard