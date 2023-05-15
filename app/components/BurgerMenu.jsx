import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function BurgerMenu() {
  return (
    <nav id='burgerMenu'>
          <div className="nav-left">
          <Link href="/">
           <Image src="/cphstays-logo.svg" alt="cphstays logo" width={100} height={100} className="logo-img" />
           </Link>
         </div>
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <Link href="/"><li>Home</li></Link>
        <Link href="/apartments"><li>Apartments</li></Link>
        <Link href="/landlords"><li>For landlords</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>
    <div className="menu-overla hidden"></div>
    </div>
  </nav>
  )
}

export default BurgerMenu