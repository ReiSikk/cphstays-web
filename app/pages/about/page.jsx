import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <>
    <section className='about-hero-wrapper'>
        <h1>Explain who and what we are</h1>
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
          </div>
        </div>
          <div className="hero-quote">
            <h3>Something</h3>
          </div>
      </section>
      <section className="benefits">
        <div className="benefits-container">
        <div className="benefits-bg-img"></div>
          <div className="benefits-right">
            <p>Lorem ipsum</p>
            <h3>Some kind of message </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum.
            </p>
          </div>
          <div className="benefits-content">
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
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page