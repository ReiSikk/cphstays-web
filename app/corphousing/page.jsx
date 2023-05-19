"use client"
import React from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Image from 'next/image'
import Link from 'next/link'
import HDIWsection from '../components/HDIWsection'
import Carousel from '../components/ApartmentsCarousel'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

function page() {
  return (
    <>
      <section>
        <h1>Find a home away from home</h1>
        <div className='hero-container'>
          <Image src='/images/hero-img.webp' alt='hero image' width={1200} height={800} className="hero-img" />
          <div className='hero-cta'>
            <h3>Find your perfect apartment and send a request</h3>
            <div className='hero-cta-container'>
              <Link href='/apartments' className='secondary-btn'>See the apartments</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='benefits'>
        <div className='benefits-container'>
          <div className='benefits-left'>
            <Image src='/images/benefits-bg.webp' alt='benefits image' width={1200} height={800} className="benefits-img" />
            <ul className='benefits-list'>
              <li><span><Image src='/images/check-icon.svg' alt='check icon' width={28} height={28} className="benefits-icon" /> </span>Lorem ipsum dolor sit amet, consect.</li>
              <li><span><Image src='/images/check-icon.svg' alt='check icon' width={28} height={28} className="benefits-icon" /> </span>Lorem ipsum dolor sit amet, consect.</li>
              <li><span><Image src='/images/check-icon.svg' alt='check icon' width={28} height={28} className="benefits-icon" /> </span>Lorem ipsum dolor sit amet, consect.</li>
            </ul>
          </div>
          <div className='benefits-right'>
           <p>Lorem ipsum</p>
           <h3>Corporate housing benefits </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
        </div>
      </section>
      <HDIWsection />
      <Carousel />
      <Testimonials /> 
      <ContactForm />

    </>
  )
}

export default page