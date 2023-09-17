
import axios from 'axios'; // Continue here
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ApartmentDetails() {

    const { apartmentId } = useParams();
    // initialize apartment details to null
    const [apartmentDetails, setApartmentDetails] = useState(null);

    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/apartments/${apartmentId}`)
        .then((response) => {
            console.log(response);
            // set apartment details to response data
            setApartmentDetails(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [apartmentId]);

    if (!apartmentDetails) {
        return <div> Loading... </div>
    }

    return (
        <div>
            <h1> Apartment Details </h1>
            <h2> {apartmentDetails.title} </h2>
            <div>
                <h3> Price per day: {apartmentDetails.pricePerDay}</h3>
                <br />
                <p> Created: {apartmentDetails.createdAt}</p>
                <br />
                <p> Last update: {apartmentDetails.updatedAt}</p>
                <br />
                <p> Id: {apartmentDetails._id}</p>
            </div>
        </div>
    );
}

export default ApartmentDetails;