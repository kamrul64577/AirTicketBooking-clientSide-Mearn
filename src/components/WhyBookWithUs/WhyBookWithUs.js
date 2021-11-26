import React from 'react';

import './WhyBookWithUs.css'
import plane1 from '../../images/plane-1.jpg';
import plane2 from "../../images/plane-2.jpg";
import plane3 from "../../images/plane-3.jpg";

const WhyBookWithUs = () => {
    return (
        <div>
            <div className="book-with-us py-5">
                <div className="container">
                    <h1>Why Book With Us</h1>
                    <p>US-Bangla Airlines is the leading premium airline of Bangladesh, with impeccable standards of service equipped with incomparable reliability </p>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid mb-3" src={plane1} alt="" />
                            <h3 className="mb-3">Cheap Flight Ticket</h3>
                            <p>Compare Hundreds of Sites. Find the Best Flight Deals to Fit Your Budget Now! Compare 100s of Sites and Find the Best Airfare Deals.</p>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid mb-3" src={plane2} alt="" />
                            <h3 className="mb-3">We Have Experienced</h3>
                            <p>Leading the End-to-End Air Travel Experience · 482 Airline & Key Supplier Members. APEX is a network of the world's leading airlines</p>
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid mb-3" src={plane3} alt="" />
                            <h3 className="mb-3">Online Payment System</h3>
                            <p>Bank Transfer: Online. This option enables you to pay online and Emirates will issue your ticket once your bank's confirmation on successful</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyBookWithUs;