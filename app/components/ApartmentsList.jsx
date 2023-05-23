import React from 'react'
import ApartmentCard from './ApartmentCard'

function ApartmentsList(props) {
    console.log(props, "props");
  return (
    <section className="apt-grid-wrapper">
         {props.filteredList.map((apartment) => {
          return apartment.rooms != "0" ?
           <ApartmentCard rooms={apartment.rooms} location={apartment.location} key={apartment.id} /> : null;
        })}
    </section>
  )
}

export default ApartmentsList