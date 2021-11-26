import React from 'react';

import './PopularDestination.css'

import img1 from '../../images/destination-1.jpg';
import img2 from '../../images/destination-2.jpg';
import img3 from '../../images/destination-3.jpg';
import img4 from '../../images/destination-4.jpg';

const PopularDestination = () => {
    return (
        <div className="popular-destination py-5">
            <div className="container">
                <h1>Popular Destination</h1>
                <p>You can visit the popular destnation with your family and friends</p>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h3 className ="card-text">HallStatt</h3>
                            <p className="muted">Austia</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={img2} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h3 className="card-text">Lanzarote</h3>
                            <p className="muted">Spain</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={img3} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h3 className="card-text">London</h3>
                            <p className="muted">United Kingdom</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img src={img4} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h3 className="card-text">Zurich</h3>
                            <p className="muted">Switzerland</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestination;