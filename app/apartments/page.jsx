"use client"
import React from "react";
import ApartmentCard from "../components/ApartmentCard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ApartmentsList from "../components/ApartmentsList";
import Filters from "../components/Filters";

function Page() {

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

    const [filter, setFilter] = useState({
        location: "all",
        rooms: "any",
      });

      const allApartments = [
        { 
            id: 1,
            location: 'Østerbro',
            rooms: '3',
            available: true,
        },
        { 
            id: 2,
            location: 'Nørrebro',
            rooms: '4',
            available: true,

        },
        { 
            id: 3,
            location: 'Vesterbro',
            rooms: '2',
            available: false,

        },
        { 
            id: 4,
            location: 'Vesterbro',
            rooms: '5',
            available: true,

        },
    ]

    const filteredList = allApartments.map((apartment) => {
      if (location === 'all' && rooms === 'all') {
        const filteredApartments = allApartments.filter(apartment => apartment.available);
        return apartment;
      } else if (location === 'all' && rooms === apartment.rooms) {
        return apartment;
      } else if (location === apartment.location && rooms === 'all') {
        return apartment;
      } else if (location === apartment.location && rooms === apartment.rooms) {
        return apartment;
      }
    });

    const filteredApartments = allApartments.filter(apartment => apartment.available);
  
    console.log(filteredList, "filteredList");


  return (
    <>
        <div className="hero-container">
          <h1>Apartments</h1>
          <Image
            src="/images/apartments-hero.jpg"
            alt="hero image"
            width={1200}
            height={800}
            className="hero-img"
          />
        {/*   <div id="apt-hero-benefits">
            <ul className="benefits-list" id="apt-hero-benefits">
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet, consect.
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet, consect.
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Lorem ipsum dolor sit amet, consect.
              </li>
            </ul>
            </div> */}
          </div>
         <div className="carousel-card hero-cta apt-hero-cta">
           <div className="carousel-card-top">
           <Image src='/images/cheryl-example.jpg' alt='picture of the founder and CEO of Cph Stays, Cheryl Barnes' width={64} height={64} className="carousel-card-img" />
            <div className="carousel-card-info">
            <h5>Cheryl Barnes</h5>
            <p className='carousel-card-label'>Founder and CEO</p>
            </div>
           </div>
            <div className="carousel-card-bottom">
            <p className='testimonial-quote'>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium modi deserunt, beatae quibusdam dolorum at ex dolore quasi odit minima totam id ipsum.&quot;</p>
            </div>

  </div>
  <div className="apt-intro-text">
    <span className="small-label">Fully serviced apartments</span>
    <h2>Browse our apartments</h2>
  </div>
  <Filters />
  <ApartmentsList filteredList={filteredList} allApartments={allApartments} filteredApartments={filteredApartments}/>
    </>
  );
}

export default Page;
