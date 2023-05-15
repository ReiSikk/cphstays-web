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
          <Link href="/">
           <Image src="/cphstays-logo.svg" alt="cphstays logo" width={100} height={100} className="logo-img" />
           </Link>
         </div>
        <div className="nav-right">
       <Link href="/apartments">
          Apartments
        </Link>
        <Link href="/landlords">
          For landlords
        </Link>
       <Link href="/about">
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
          <Link className="primary-btn" href="/corphousing">Corporate housing</Link>
        </div>
        </>
}
        </nav>
        </>
  )
}

export default NavigationBar