import React from "react";
import { Card } from 'react-bootstrap';
// import { link } from 'react-router-dom';

function TripCard(props) {
    console.log(props)
    if(!props.trips){
        return(
            <>
            <h1>loading</h1>
            </>
        )
    }

    const renderCard = (card, index)=>{

    return (
        <div className="trip-card">
        {/* <link to={'/trip/${data.id}'}> */}
        <Card key={index} style={{ width: '25rem' }} className="h-80 shadow-sm bg-white rounded">  
            <Card.Body className="Card-body">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{card.tripName}</Card.Title>
                    <Card.Img variant="top" src="https://www.museumofplay.org/app/uploads/2021/08/rubber-duck-sq.jpg" alt="img.array"></Card.Img>
                    <Card.Text className="mt-auto">{card.budget}</Card.Text>
                </div>
            </Card.Body>
        </Card>
        {/* </link> */}
        </div>
    )
 }
    return (
    <div className='Cards'>
{props.trips.map((card,index)=>renderCard(card,index))}
</div>)

}

export default TripCard