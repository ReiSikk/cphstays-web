import React from "react";
import ApartmentCard from "../components/ApartmentCard";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
        <div className="hero-container">
          <h1>Apartments</h1>
          <Image
            src="/images/apartments-hero.jpg"
            alt="hero image"
            width={1200}
            height={800}
            className="hero-img"
          />
        {/*   <div id="apt-hero-benefits">
            <ul className="benefits-list" id="apt-hero-benefits">
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
                Lorem ipsum dolor sit amet, consect.
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
                Lorem ipsum dolor sit amet, consect.
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
                Lorem ipsum dolor sit amet, consect.
              </li>
            </ul>
            </div> */}
          </div>
         <div className="carousel-card hero-cta apt-hero-cta">
           <div className="carousel-card-top">
           <Image src='/images/cheryl-example.jpg' alt='picture of the founder and CEO of Cph Stays, Cheryl Barnes' width={64} height={64} className="carousel-card-img" />
            <div className="carousel-card-info">
            <h5>Cheryl Barnes</h5>
            <p className='carousel-card-label'>Founder and CEO</p>
            </div>
           </div>
            <div className="carousel-card-bottom">
            <p className='testimonial-quote'>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium modi deserunt, beatae quibusdam dolorum at ex dolore quasi odit minima totam id ipsum.&quot;</p>
            </div>

  </div>
      <section className="apt-grid-wrapper">
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      </section>
    </>
  );
}

export default page;
