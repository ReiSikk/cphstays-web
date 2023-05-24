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
  /*   const [rooms, setRooms] = React.useState('');
    console.log(rooms); */
  
   

    //set state for location
 
  

    const [filter, setFilter] = useState({
        location: "all",
        rooms: "any",
      });
      const locationChanged = (e) => {
        setFilter({ ...filter, location: e.target.value });
      };
      const roomsChanged = (e) => {
        setFilter({ ...filter, rooms: e.target.value });
      };

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

   let filteredList = [];
   if (filter.rooms  === "all") {
    filteredList = allApartments.filter((apartment) => apartment.rooms === filter.rooms);
  } 
  if (filter.location === "all") {
    filteredList = allApartments.filter((apartment) => apartment.location === filter.location);
  }
  //write me a filter which displays all apartments with the same location and rooms as the filter and only if the apartment is available
  if (filter.location !== "all" && filter.rooms !== "all") {
    filteredList = allApartments.filter((apartment) => apartment.location === filter.location && apartment.rooms === filter.rooms && apartment.available === true);
  };

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
  <Filters  locationChanged={locationChanged} roomsChanged={roomsChanged} />
  <ApartmentsList filteredList={filteredList} filter={filter} />
    </>
  );
}

export default Page;
