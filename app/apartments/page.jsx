"use client"
import React from "react";
import ApartmentCard from "../components/ApartmentCard";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ApartmentsList from "../components/ApartmentsList";
import Filters from "../components/Filters";

function Page() {

    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartment');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


  console.log(data, "data");


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

      const allApartments = [
        { 
            id: 1,
            location: 'Østerbro',
            rooms: '3',
            available: true,
            price: "5500",
        },
        { 
            id: 2,
            location: 'Nørrebro',
            rooms: '4',
            available: true,
            price: "9000",


        },
        { 
            id: 3,
            location: 'Vesterbro',
            rooms: '2',
            available: false,
            price: "6600",

        },
        { 
            id: 4,
            location: 'Vesterbro',
            rooms: '5',
            available: true,
            price: "12000"

        },
        { 
            id: 5,
            location: 'Vesterbro',
            rooms: '3',
            available: true,
            price: "8000"

        },
    ]

   let filteredList = allApartments
   //
   if (filter.rooms  === "all") {
    filteredList = allApartments.filter((apartment) => apartment.rooms === filter.rooms);
  } 

  //if location is all and rooms is set display all apartments with the same rooms and only if the apartment is available
  if (filter.location === "all" && filter.rooms !== "all") {
    filteredList = allApartments.filter((apartment) => apartment.rooms === filter.rooms && apartment.available === true && apartment.price <= filter.maxRent);
  }
  
  //if location is all and rooms is all display all apartments and only if the apartment is available
  if (filter.location === "all" && filter.rooms === "all") {
    filteredList = allApartments.filter((apartment) => apartment.available === true);
  }

  //if location is set and rooms is set display all apartments with the same location and rooms and only if the apartment is available
  if (filter.location !== "all" && filter.rooms !== "all") {
    filteredList = allApartments.filter((apartment) => apartment.location === filter.location && apartment.rooms === filter.rooms && apartment.available === true && apartment.price <= filter.maxRent);
  };

  //if location is set and rooms is all display all apartments with the same location and only if the apartment is available
  if (filter.location !== "all" && filter.rooms === "all") {
    filteredList = allApartments.filter((apartment) => apartment.location === filter.location && apartment.available === true && apartment.price <= filter.maxRent);
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
  <div className="apt-intro">
    <span className="small-label">Fully serviced apartments</span>
    <h2>Browse our apartments</h2>
  <Filters  locationChanged={locationChanged} roomsChanged={roomsChanged} priceChanged={priceChanged} />
  </div>
  <ApartmentsList filteredList={filteredList} filter={filter} data={data} />
    </>
  );
}

export default Page;
