import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function ApartmentCard() {
  return (
    <>
    {/* Just start writing HTML down below as you usually do and remember the html in the "return" parenthesis must have one parent element. In react it's easiest to just add these empty "fragments" which are these "<> </>" */}

    {/* This is how links look in React ==> */}
   <Link href="/apartments">Link to apartment</Link> 

   {/* This is how image tags look ==> */}
   <Image src="/images/imagehere" alt="apartment" width={200} height={200} className="card-image" />
    <div>ApartmentCard</div>
    </>
  )
}

export default ApartmentCard