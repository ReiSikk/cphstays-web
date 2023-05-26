"use client"
import React, { useEffect, useState } from "react";
import ApartmentsList from "../../components/ApartmentsList";
import Filters from "../../components/Filters";


function Page() {

  const [apartments, setApartments] = useState([]);
  const [availableApartments, setAvailableApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartment');
        const jsonData = await response.json();
        setApartments(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

console.log(apartments,"apartments"); // Add this line to check the fetched data
  

//set filters state
  const [filter, setFilter] = useState({
    location: "all",
    rooms: "all",
    maxRent: "all",
  });

  const locationChanged = (e) => {
    setFilter({ ...filter, location: e.target.value });
  };

  const roomsChanged = (e) => {
    setFilter({ ...filter, rooms: e.target.value });
  };

  const priceChanged = (e) => {
    setFilter({ ...filter, maxRent: e.target.value });
  };


  // Filter available apartments
  useEffect(() => {
     // Filter available apartments based on the filter criteria
     const filteredApartments = apartments.filter((apartment) => {
      const isLocationMatch = filter.location === "all" || apartment.district === filter.location;
      const isRoomsMatch = filter.rooms === "all" || apartment.rooms === filter.rooms;
      const isMaxRentMatch = filter.maxRent === "all" || !filter.maxRent || parseInt(apartment.price) <= parseInt(filter.maxRent);
  
      return isLocationMatch && isRoomsMatch && isMaxRentMatch;
    });
  
    setAvailableApartments(filteredApartments);
  }, [apartments, filter]);
    
    
 


  
  

  
  


  return (
    <>
      {/* Your JSX content here */}
      <Filters
        locationChanged={locationChanged}
        roomsChanged={roomsChanged}
        priceChanged={priceChanged}
      />
      <ApartmentsList  filter={filter} availableApartments={availableApartments} />
    </>
  );
}

export default Page;
