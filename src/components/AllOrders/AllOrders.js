import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        myFunction();
        fetch(`https://ghostly-scarecrow-39404.herokuapp.com/Orders`)
        .then(res => res.json())
        .then(data => {
            setAllOrders(data)
            setLoading(false)
        })
    },[]);
    const myFunction = () => {
        setLoading(true)
    };

    
    // Delete Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            const url = `https://ghostly-scarecrow-39404.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('succesfully deleted');
                        const remainingOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrders);
                    }
                })
        }

    }

    if (loading)
        return (<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>)
    return (
        <div>
            
            <div className="container">
                <h2 className="py-4 text-center">Here is all orders</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {
                        allOrders.map(orders =>
                            <tbody key={orders._id}>
                                <tr>
                                    <td data-label="Title">{orders.title}</td>
                                    <td data-label="Price">{orders.price}</td>
                                    <td data-label="Name">{orders.name}</td>
                                    <td data-label="Email">{orders.email}</td>
                                    <td data-label="Mobile">{orders.mobile}</td>
                                    <td data-label="Staus"><button className="btn btn-success" >{orders.status}</button></td>
                                    <td data-label="Action"><button onClick={() => handleDeleteOrder(orders._id)} className="btn btn-danger">Delete</button></td>
                                </tr>

                            </tbody>



                        )
                    }
                </table>

            </div>

        </div>
    );
};

export default AllOrders;