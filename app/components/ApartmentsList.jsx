import React from 'react'
import ApartmentCard from './ApartmentCard'

function ApartmentList (props) {
  
     
    return (
        <>
      <div>
        <h1>Available Apartments</h1>
        {props.filteredList.map( apartment => {
          return apartment ? <ApartmentCard key={apartment.id} apartmentRooms={apartment.rooms} apartmentLocation={apartment.location}  /> : null;
        })}

        {/* this below kinda worked */}
       {/*  {filteredApartments.map(apartment => (
          <ApartmentCard key={apartment.id} apartmentRooms={apartment.rooms} apartmentLocation={apartment.location}/>

        ))} */}
      </div>
      </>
    );
  };

export default ApartmentList