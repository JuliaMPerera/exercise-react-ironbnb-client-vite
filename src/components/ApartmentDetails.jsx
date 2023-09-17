
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ApartmentDetails() {

    const { apartmentId } = useParams();
    const [apartmentDetails, setApartmentDetails] = useState(null);

    useEffect(() => {
            <h2> Apartment Details </h2>
            // ???
    }, [apartmentId]);

    if (!apartmentDetails) {
        return <div> Loading... </div>
    }

    return (
        <div>
            <h1> Apartment Details </h1>
            <p> {apartmentDetails.description} </p>
        </div>
    );
}

export default ApartmentDetails;