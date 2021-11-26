import React from 'react';
import { Link } from 'react-router-dom';
import PopularDestination from '../PopularDestination/PopularDestination';
import Services from '../Services/Services';
import WhyBookWithUs from '../WhyBookWithUs/WhyBookWithUs';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="banner-content">
                    <div>
                        <h1 className="banner-header">Your Journey Partner</h1>
                        <Link to="" className="banner-btn">Book A Ticket</Link>
                    </div>
                </div>
            </div>
            <Services></Services>
            <WhyBookWithUs></WhyBookWithUs>
            <PopularDestination></PopularDestination>
        </div>
    );
};

export default Home;