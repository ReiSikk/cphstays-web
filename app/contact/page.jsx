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
    </>
  )
}

export default page