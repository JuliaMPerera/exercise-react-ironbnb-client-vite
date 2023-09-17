
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CreateApartment() {

    const[title, setTitle] = useState("");
    const[imageURL, setImageURL] = useState("");
    const[price, setPrice] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newApartment = {
            img: imageURL,
            title: title,
            pricePerDay: price
        }

        axios.post(`${import.meta.env.VITE_API_BASE_URL}/apartments`, newApartment)
            .then((response) => {
                navigate("/apartments");
            })
            .catch((e) => {
                console.log("error creating new aprtment", e)
            })
  }  
    
    return (
        <>
            <h1> Create new apartment </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        required={true}
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }} 
                    />
                </label>
                <br />
                <br />
                <label>
                    Image:
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Image URL"
                        required={true}
                        value={imageURL}
                        onChange={(event) => { setImageURL(event.target.value) }} 
                    />
                </label>
                <br />
                <br />
                <label>
                    Price per day:
                    <input
                        type="number"
                        min={1}
                        max={999}
                        name="price"
                        placeholder="Price"
                        required={true}
                        value={price}
                        onChange={(event) => { setPrice(event.target.value) }} 
                    />
                </label>
                <br />
                <br />
                <button> Create new </button>
            </form>
        </>
    );
}

export default CreateApartment;





    // Created: {apartmentDetails.createdAt} 
    // Last update: {apartmentDetails.updatedAt} 
    // Id: {apartmentDetails._id}
