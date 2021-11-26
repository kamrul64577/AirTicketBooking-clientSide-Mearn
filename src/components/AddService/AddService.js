import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://ghostly-scarecrow-39404.herokuapp.com/service', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Successfully added');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h2 className="pt-5">Add a New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;