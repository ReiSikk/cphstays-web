import React from 'react'
import ApartmentCard from './ApartmentCard'
import ErrorDiv from './ErrorDiv'

function ApartmentList (props) {     
    if (!props.data) {
        return <div>Loading...</div>;
      }
      console.log(props, "props in apartmentList");
      // Extract the featured image href from the JSON response
      
/*       const featuredImageHref = props.data[0]._links['wp:featuredmedia'][0].href; */

      return (
        <div>
          {/* Render your fetched data here */}
          {props.data && (
            <ul>
              {props.data.map((apartment) => (
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
                featuredImage={apartment.preview_image} 
                /* featuredImageHref={featuredImageHref} */
                 />
                featuredImage={}
                </li>
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