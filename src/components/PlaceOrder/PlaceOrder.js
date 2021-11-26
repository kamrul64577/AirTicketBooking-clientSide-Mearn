

import React, { useEffect, useState, useRef } from 'react';
import './PlaceOrder.css'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
const PlaceOrder = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();

    const idRef = useRef('');
    const titleRef = useRef('');
    const priceRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const mobileRef = useRef('');

    useEffect( () => {
        fetch(`https://ghostly-scarecrow-39404.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    },[]);
const handleOrder = e => {
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const name = userNameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const mobile = mobileRef.current.value;

    const newOrder = {s_id:id, title:title, price:price, name:name, email:email, address:address, mobile:mobile, status:"pending"}

    fetch(`https://ghostly-scarecrow-39404.herokuapp.com/orders`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('order processed successfully');
                    // reset();
                }
            })

        e.preventDefault();
    };

    return (
        <div className="place-order py-5 container">
            <div className="border p-3">
                <h3>Order Description</h3>
                <img className="img-fluid" src={service.img} alt="" />
                <h3>Title: {service.title}</h3>
                <p>Description: {service.description}</p>
                <h5>Price: ${service.price}</h5>
            </div>
            <div className="border p-3 place-order-form">
                <h2>Please Place Order Your Ticket</h2>
                <form onSubmit={handleOrder} className="text-center mt-4">
                    <input type="text" className="form-control" defaultValue={service._id || ''} ref={idRef}/>
                    <input type="text"  className="form-control" defaultValue={service.title || ''} ref={titleRef} />
                    <input type="number"  className="form-control" defaultValue={service.price || ''} ref={priceRef} />
                    <input type="text"  className="form-control" defaultValue={user.displayName || ''}  ref={userNameRef}/>
                    <input type="email"  className="form-control" defaultValue={user.email || ''} ref={emailRef}/>
                    <input type="text"  className="form-control" placeholder="Address" ref={addressRef} />
                    <input type="number"  className="form-control" placeholder="Mobile" ref={mobileRef} />
                    <input className="btn btn-success py-2 px-5 d-block w-100 mt-4" type="submit" defaultValue="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;