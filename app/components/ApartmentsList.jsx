import React from 'react'
import ApartmentCard from './ApartmentCard'
import ErrorDiv from './ErrorDiv'

function ApartmentList (props) {     
    return (
        <div>
          {/* Render your fetched data here */}
          {props.data && (
            <ul>
              {props.data.map((apartment) => (
                <li key={apartment.id}>
                <ApartmentCard key={apartment.id} apartmentLocation={apartment.address} apartmentRooms={apartment.rooms} apartmentPrice={apartment.price} apartmentSize={apartment.size} apartmentBeds={apartment.beds} apartmentDistrict={apartment.district} /></li>
              ))}
            </ul>
          )}
        </div>
      );


   /*  return (
        <>
      <div className='apartments-list'>
        {props.filteredList.length === 0 ? 
        <>
        <h3>No available Apartments</h3>
        <ErrorDiv />
        </>
         : <h3>Available apartments</h3>} 
        <div className="apartments-list-grid">
        {props.filteredList.map( apartment => {
          return apartment ? <ApartmentCard key={apartment.id} apartmentRooms={apartment.rooms} apartmentLocation={apartment.location} apartmentPrice={apartment.price}  /> : null;
        })}
        </div>
      </div>
      </>
    ); */
  };

export default ApartmentList