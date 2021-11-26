import React from 'react';

const Footer = () => {
    return (
        <div className="bg-light pt-5 pb-2">
            <div className="container">
                <footer>
                    <input type="email" className="form-control w-50 d-inline" />
                    <button className="btn btn-success ms-3">Subscribe</button>
                    <p className="m-0 pt-3">All Copyright &copy; reserved 2021</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;