"use client"

import React from 'react'
import { useSearchParams, usePathname } from 'next/navigation';
//use navigation form router






function Apartmentpage() {
    const params = useSearchParams();
    const pathname = usePathname();
  
    const title = params.get('title');
    const address = params.get('address');


  return (
    <>
    <h3>ApartmentPage</h3>
    <div>{address}</div>
    <p>{title}</p>
    <p>{pathname}</p>
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