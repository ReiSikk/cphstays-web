import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <div id="footerSection">
      <div className="footer-left">
    <Link href="/">
     <Image src="/cphstays-logo.svg" alt="cphstays logo" width={200} height={200} className="logo-img" />
     </Link>
     <p>Description of company or sth</p>
      </div>
      <div className="footer-right">
        <div className="footer-links-group">
        <h4>Service</h4>
        <ul>
        <Link href="/corphousing">
          Corporate housing
        </Link>
        <Link href="/apartments">
          Apartments
        </Link>
        <Link href="/about">
          About us
        </Link>
        </ul>
        </div>
        <div className="footer-links-group">
        <h4>Contact</h4>
        <ul>
        <Link href="/">
          FAQ
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <Link href="tel:45 50179185">
          45 50179185 - change nr
        </Link>
        </ul>
        </div>
        </div>
      </div>
      </>
  )
}

export default Footer