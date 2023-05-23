import React from 'react'
import SelectLocation from './SelectLocation'
import SelectRooms from './SelectRooms'
import {useState } from 'react'
import ApartmentsList from './ApartmentsList'

function Filters() {

    //set state for rooms
    const [rooms, setRooms] = React.useState('');
    console.log(rooms);
  
    const handleRooms = (event, SelectChangeEvent) => {
      setRooms(event.target.value);
    };

    //set state for location
    const [location, setLocation] = React.useState('');
    console.log(location);
  
    const handleLocation = (event, SelectChangeEvent) => {
      setLocation(event.target.value);
    };

    //set filtered apartments
   const allApartments = [
        { 
            id: 1,
            location: 'Østerbro',
            rooms: '3',
        },
        { 
            id: 2,
            location: 'Nørrebro',
            rooms: '4',
        },
        { 
            id: 3,
            location: 'Vesterbro',
            rooms: '2',
        },
        { 
            id: 4,
            location: 'Vesterbro',
            rooms: '5',
        },
    ]
    let filteredList = []
    function displayApartments() {
        filteredList = allApartments.map((apartment) => {
            if (location === 'all' && rooms === 'all') {
                return apartment
            } else if (location === 'all' && rooms === apartment.rooms) { 
                return apartment

            } else if (location === apartment.location && rooms === 'all') {
                return apartment
            } else if (location === apartment.location && rooms === apartment.rooms) {
                return apartment


            };
        })
        console.log(filteredList, "filteredList");
    }
    

  return (
    <div className="filters-container">
    <SelectLocation handleLocation={handleLocation} location={location}/>
    <SelectRooms handleRooms={handleRooms} rooms={rooms}/>
    <ApartmentsList filteredList={filteredList} displayApartments={displayApartments}/>
    </div>
  )
}

export default Filters