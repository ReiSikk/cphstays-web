import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NavigationBar() {
  return (
    <>
    <nav>
       <Link href="/">
        <Image src="/cphstays-logo.svg" alt="cphstays logo" width={100} height={100} />
        </Link>
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
        <button>
          <Link href="/corphousing">Corporate housing</Link>
        </button>
        </nav>
    </>
  )
}

export default NavigationBar