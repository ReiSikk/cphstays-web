import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

function BurgerMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openBurgerIcon = () => { 
        setIsMenuOpen(!isMenuOpen); 
    };




  return (
    <>
    <div id='burgerMenu'>
          <div className="nav-left">
          <Link href="/">
           <Image src="/images/cphstays-logo.svg" alt="cphstays logo"  width={100} height={100} className="logo-img" />
           </Link>
         </div>
    <div id="menuToggle">
      <input type="checkbox" id="myCheckbox" onChange={openBurgerIcon} checked={isMenuOpen} />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <Link href="/"><li>Home</li></Link>
        <Link href="/pages/corphousing" className='animated-item'><li>Corporate housing</li></Link>
        <Link href="/pages/apartments" className='animated-item'><li>Apartments</li></Link>
        <Link href="/pages/about" className='animated-item'><li>About</li></Link>
        <Link href="/pages/contact" className='animated-item'><li>Contact</li></Link>
      </ul>
    </div>

    <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`} ></div>
  </div>
  </>
  )
}

export default BurgerMenu