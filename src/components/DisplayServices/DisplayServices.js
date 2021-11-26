import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayServices.css'
const DisplayServices = (props) => {
    const {_id,img, title, description, price} = props.service;
    console.log(title)
    return (
            <div className="col-lg-4 display-services p-4">
                <div className="card" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <h6 className="py-3">Ticket Price: ${price}</h6>
                        <Link to={`/service/${_id}`} className="btn btn-primary">Book Now</Link>
                    </div>
                </div>
            </div>
        
    );
};

export default DisplayServices;