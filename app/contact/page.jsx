
"use client"
import React from 'react'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'


function page() {
  return (
    <>

    <article>
        <h1>Get in touch</h1>
        <p>Fill out the form below to send us a message and we will get back to you as soon as possible!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ex velit tempora mollitia alias nesciunt reprehenderit sequi vero deleniti? Ea quae ab sequi amet saepe. Esse voluptatem eveniet nostrum.
        </p>
    </article>
    <div className="contact-information">
      <div className="contact-block">
        <div className="contact-left">
          <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        </div>
        <div className="contact-right">
          <h4>Address</h4>
          <p>Some street 54.th, Kobenhavn</p>
        </div>
      </div>
      <div className="contact-block">
        <div className="contact-left">
          <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        </div>
        <div className="contact-right">
          <h4>Address</h4>
          <p>Some street 54.th, Kobenhavn</p>
        </div>
      </div>
      <div className="contact-block">
        <div className="contact-left">
          <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        </div>
        <div className="contact-right">
          <h4>Address</h4>
          <p>Some street 54.th, Kobenhavn</p>
        </div>
      </div>
      <div className="contact-some">
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
      </div>
    </div>
    <ContactForm />
      {" "}
      <section>
        <h1>Explain who and what we are</h1>
        <div className="hero-container">
          <Image
            src="/images/contact_hero.jpg"
            alt="hero image"
            width={1200}
            height={800}
            className="hero-img"
          />
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
          <div className="hero-quote">
            <h3></h3>
          </div>
        </div>
      </section>
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
          <div className="benefits-left">
            <Image
              src="/images/benefits-bg.webp"
              alt="benefits image"
              width={1200}
              height={800}
              className="benefits-img"
            />
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
      </section>

    </>
  );
}

export default page;
