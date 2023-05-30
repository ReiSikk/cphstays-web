"use client";
import React from 'react'
import ApartmentCard from './ApartmentCard'
import ErrorDiv from './ErrorDiv'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Router from 'next/router';




function ApartmentList (props) {     
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartment?_embed');
        const jsonData = await response.json();
        setImgData(jsonData);
    };

    fetchData();
  }, []);

    if (!props.availableApartments) {
        return <div>Loading...</div>;
      }

      return (
        <>
        <div>
          {/* Render your fetched data here */}
          {props.availableApartments.length === 0 ? 
        <>
        <h4>No available Apartments</h4>
        <ErrorDiv />
        </>
         : <h4>Available apartments</h4>} 
          <section className='apartments-flex'>
          {props.availableApartments && (
            <ul className="apartments-list-grid">
              {props.availableApartments.map((apartment) => (

                <li key={apartment.id}>
                <ApartmentCard 
                key={apartment.id} 
                apartmentLocation={apartment.address} 
                apartmentRooms={apartment.rooms} 
                apartmentPrice={apartment.price} 
                apartmentSize={apartment.size} 
                apartmentBeds={apartment.beds} 
                apartmentDistrict={apartment.district} 
                apartmentPhotos={apartment.apartment_photos} 
                apartmentTitle={apartment.title.rendered} 
                apartmentDescription={apartment.apartment_description}
                imgData={apartment._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}
               />
                </li>
              ))}
            </ul>
          )}
          </section>
        </div>
        </>
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



/*   //get the images
  export async function getStaticProps() {
    // Get data from api
    const imgData = await fetch("https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartment?_embed")
    const dataImg = await imgData.json();

  
    // Return the data inside props
    return {
      data: {
        dataImg,
      },
    };
  } */