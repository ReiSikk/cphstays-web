"use client"

import React from 'react'
import { useSearchParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
//use navigation form router






function Apartmentpage() {

  /*   const params = useSearchParams();
    const pathname = usePathname();

  
    const { address, district, price, size, beds, rooms, title, photos } = params;
    console.log(address);
    console.log( district); */

  return (
    <>
    <h3>ApartmentPage</h3>
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