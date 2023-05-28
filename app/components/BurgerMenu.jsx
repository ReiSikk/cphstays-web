import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

function BurgerMenu() {

    //write me a function which keeps state of the burger menu state and updates state when the input is checked 
    //and when the input is unchecked 
    //when the input is checked the menu should be open
    //when the input is unchecked the menu should be closed
    //when the menu is open the menu should be visible
    //when the menu is closed the menu should be hidden
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
        <Link href="/pages/corphousing"><li>Corporate housing</li></Link>
        <Link href="/pages/apartments"><li>Apartments</li></Link>
        <Link href="/pages/landlords"><li>For landlords</li></Link>
        <Link href="/pages/about"><li>About</li></Link>
        <Link href="/pages/contact"><li>Contact</li></Link>
      </ul>
    </div>

    <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`} ></div>
  </div>
  </>
  )
}

export default BurgerMenu