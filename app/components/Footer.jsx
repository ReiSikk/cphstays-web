import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer>
      <div id="footerSection">
      <div className="footer-left">
    <Link href="/">
     <Image src="/images/cphstays-logo.svg" alt="cphstays logo" width={200} height={200} className="logo-img" />
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
        <div className="footer-links">
          <h5>Social</h5>
        <p className="copyright">Copyright ManageMyAir 2023 ©</p>
        <div className="footer-some">
        <Link href="https://www.facebook.com/Managemyair/">
          <Image src="/images/facebook-logo.svg" alt="facebook logo" width={28} height={28} className="some-logo" />
        </Link>
        <Link href="https://www.instagram.com/managemyair/?hl=en">
          <Image src="/images/instagram-logo.svg" alt="instagram logo" width={28} height={28} className="some-logo" />
        </Link>
        <Link href="https://www.linkedin.com/company/managemyair/about/">
          <Image src="/images/linkedin-logo.svg" alt="linkedin logo" width={28} height={28} className="some-logo" />
        </Link>
        </div>


        </div>
      </footer>
      </>
  )
}

export default Footer