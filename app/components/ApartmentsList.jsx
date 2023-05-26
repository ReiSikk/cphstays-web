import React from 'react'
import ApartmentCard from './ApartmentCard'
import ErrorDiv from './ErrorDiv'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';




function ApartmentList (props) {     

  const pathname = usePathname();

/*   const [images, setImages] = useState([]);

  useEffect(() => {
    function getData() {
      setImages(props.dataImg);
    }
    getData();
  }, [props.dataImg]); */


    if (!props.availableApartments) {
        return <div>Loading...</div>;
      }

      console.log(props, "props in apartmentList");
      // Extract the featured image href from the JSON response
    
const featuredImageHref = props.availableApartments
      /* const featuredImage = props.availableApartments[0]._links["wp:featuredmedia"][0].media_details */
      console.log(featuredImageHref, "featuredImageHref"); 

      return (
        <div>
          {/* Render your fetched data here */}
          {props.availableApartments.length === 0 ? 
        <>
        <h3>No available Apartments</h3>
        <ErrorDiv />
        </>
         : <h4>Available apartments</h4>} 
          <section>
          {props.availableApartments && (
            <ul className="apartments-list-grid">
              {props.availableApartments.map((apartment) => (
                <li key={apartment.id}>
                 <Link
                 pathname={pathname}
                 href={{
                  pathname: "pages/apartment",
                  query: {
                      address: apartment.address,
                      district: apartment.district,
                      price: apartment.price,
                      size: apartment.size,
                      beds: apartment.beds,
                      rooms: apartment.rooms,
                      title: apartment.title.rendered,
                      photos: apartment.apartment_photos,
                  }
              }}
                   >
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
                 />
                 </Link>
                </li>
              ))}
            </ul>
          )}
          </section>
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

/*   //get the images
  export async function getStaticProps() {
    // Get data from api
    const imgData = await fetch("https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartment")
    const dataImg = await imgData.json();

  
    // Return the data inside props
    return {
      props: {
        dataImg,
      },
    };
  } */