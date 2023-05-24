import React from 'react'
import ApartmentCard from './ApartmentCard'
import ErrorDiv from './ErrorDiv'

function ApartmentList (props) {     
    return (
        <>
      <div className='apartments-list'>
        {props.filteredList.length === 0 ? 
        <>
        <h3>No available Apartments</h3>
        <ErrorDiv />
        </>
         : <h3>Available apartments</h3>} 
        {props.filteredList.map( apartment => {
          return apartment ? <ApartmentCard key={apartment.id} apartmentRooms={apartment.rooms} apartmentLocation={apartment.location} apartmentPrice={apartment.price}  /> : null;
        })}
      </div>
      </>
    );
  };

export default ApartmentList