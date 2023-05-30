"use client"
import React from 'react'
import Image from 'next/image'
import WhatWeAreAbout from '@/app/components/WhatWeAreAbout'
import WhyChooseUs from '@/app/components/WhyChooseUs'

function page() {
  return (
    <>
    <section className='about-hero-wrapper'>
        <div className="about-hero-container">
          <div className="about-hero-img"></div>
       {/*    <Image
            src="/images/apartments-hero.jpg"
            alt="hero image"
            width={1200}
            height={800}
            className="hero-img"
          /> */}
          <div className="hero-content">
          <ul className="about_list">
            <li>
              <span>
                <Image
                  src="/images/check-icon.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                  className="benefits-icon"
                />{" "}
              </span>
              Convenience: Hassle-free corporate accommodation
            </li>
            <li>
              <span>
                <Image
                  src="/images/check-icon.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                  className="benefits-icon"
                />{" "}
              </span>
              Comfort: Fully serviced apartments
            </li>
            <li>
              <span>
                <Image
                  src="/images/check-icon.svg"
                  alt="check icon"
                  width={28}
                  height={28}
                  className="benefits-icon"
                />{" "}
              </span>
              Service: Hospitality experience
            </li>
          </ul>
          </div>
        </div>
         {/*  <div className="hero-quote">
            <h3>Something</h3>
          </div> */}
      </section>
          <h1>Comfort and convenience with CPH Stays</h1>
      <section className="benefits">
        <div className="benefits-container">
          <div className="benefits-right">
            <p>Lorem ipsum</p>
            <h3>Some kind of message </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </p>
          </div>
          <div id="benefits">
          <div className="benefits-content">
        <div className="benefits-bg-img"></div>
          <div className="benefits-left">
            <ul className="benefits-list">
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Fully serviced apartments
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                24/7 customer service
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                All inclusive service
              </li>
            </ul>
          </div>
          </div>
          </div>
        </div>
      </section>
      <WhatWeAreAbout />
      <WhyChooseUs />
    </>
  )
}

export default page