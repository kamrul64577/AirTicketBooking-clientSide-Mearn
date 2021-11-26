import React from 'react';

import {Link, NavLink} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <Link className="navbar-brand" to="#">AirTicket</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            {user.email && <NavLink className="nav-link" to="/addService">Add Service</NavLink>}
                            {user.email && <NavLink className="nav-link" to="/myOrders">My Orders</NavLink>}
                            {user.email && <NavLink className="nav-link" to="/allOrders">All Orders</NavLink>}
                            {user.email && <span style={{ color: 'black' }}>Hello {user.displayName} </span>}
                            {
                                user.email ?
                                    <button onClick={logout}>Logout</button>
                                    :
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;