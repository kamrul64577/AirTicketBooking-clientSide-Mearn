import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayServices from '../DisplayServices/DisplayServices';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch(`https://ghostly-scarecrow-39404.herokuapp.com/service`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <h1>Our Services</h1>
                    <p>Get our fantsctic services wit cheapest price</p>
                    {
                        services.map(service => <DisplayServices 
                                                    key={service._id}
                                                    service = {service}
                                                ></DisplayServices>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;