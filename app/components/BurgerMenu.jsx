import Link from 'next/link'
import React from 'react'

function BurgerMenu() {
  return (
    <nav>
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
    </div>
  </nav>
  )
}

export default BurgerMenu