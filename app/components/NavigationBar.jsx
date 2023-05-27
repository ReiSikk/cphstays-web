"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMediaQuery } from 'usehooks-ts'
import BurgerMenu from './BurgerMenu';


function NavigationBar() {
  const matches = useMediaQuery("(max-width: 899px)");
  return (
    <>
    <nav>
        {/* If screen is smaller than 899px reveal burgermenu */}
        {matches ? <BurgerMenu/> :
        <>
          <div className="nav-left">
          <Link  className="no-scale" href="/">
           <Image src="/images/cphstays-logo.svg" alt="cphstays logo" width={100} height={100} className="logo-img" />
           </Link>
         </div>
        <div className="nav-right">
       <Link href="/pages/apartments">
          Apartments
        </Link>
        <Link href="/pages/landlords">
          For landlords
        </Link>
       <Link href="/pages/about">
          About
        </Link>
        <Link href="/pages/contact">
          Contact
        </Link>
          <Link className="primary-btn" href="/pages/corphousing">Corporate housing</Link>
        </div>
        </>
}
        </nav>
        </>
  )
}

export default NavigationBar