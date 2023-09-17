
import React, { useEffect, useState } from 'react';
import axios from "axios";


function ApartmentList() {

    const [apartments, setApartments] = useState ([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/apartments`)
            .then((response) => {
                // console.log(response);
                setApartments(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <div>
        <h1> List of Apartments </h1>

        {apartments.map((apartment) => (
            <div key={apartment._id} className="card">
                <img src={apartment.img} alt="apartment" />
                <h3> {apartment.title}</h3>
            </div>
        ))}
        </div>
    );
}

export default ApartmentList;


