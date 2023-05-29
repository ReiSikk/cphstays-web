"use client"

import React from 'react'
import { useSearchParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//use navigation form router






function Apartmentpage({searchParams}) {
  console.log(searchParams.address) // Logs "search"

  return (
    <>
    <div className="single-apt-images">
      <Image src={searchParams.img} alt={searchParams.title} width={1200} height={800} />
    </div>
    <section className='apt-info-wrapper'>
      <div className='apt-info-left'>
      <span className='small-label'>{searchParams.district}</span>
      {/* a h3 with the apartment rooms + apartment size from the searchparams */}
      <h3>{searchParams.rooms} room apartment of {searchParams.size} m2</h3>
    <h4 className='single-apt-address'>{searchParams.address}</h4>
      <p className='apartment-desc'>{searchParams.description}</p>
      </div>
    <div className="apt-details-wrapper">
      <div className="apartment-details">
      <ul>
        <li>
          <span>
            <Image 
            src="/images/location.svg"
            alt="icon_1"
            width={20}
            height={20}
            className="card-icon"
            />
          </span>
            {searchParams.address}
         </li>
        <li>
          <span>
            <Image 
              src="/images/floor_plan.svg"
              alt="rooms icon"
              width={20}
              height={20}
              className="card-icon"
            />
            </span>
            {searchParams.rooms} rooms
          </li>
        <li>
          <span>
            <Image 
              src="/images/sqm.svg"
              alt="size icon"
              width={20}
              height={20}
              className="card-icon"
            />
            </span>
            {searchParams.size} m2
          </li>
        <li>
          <span>
            <Image 
              src="/images/money-icon.svg"
              alt="money icon"
              width={20}
              height={20}
              className="card-icon"
            />
            </span>
            {searchParams.price} DKK/month
          </li>
        <li>
          <span>
            <Image 
              src="/images/bed.svg"
              alt="beds icon"
              width={20}
              height={20}
              className="bedrooms-icon"
            />
            </span>
            {searchParams.beds} bedrooms
          </li>
      </ul>
      </div>
    </div>
    </section>
    </>
  )
}

export default Apartmentpage

/* export async function getServerSideProps(context) {
  
    console.log(context.query) 
    return {
        props: { 
           title: context.query.title //pass it to the page props
        }
    }
  } */