
"use client"
import React from 'react'
import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import Link from 'next/link'


function page() {
  return (
    <>
<div className='contact-wrapper'>
  <section>
    <article className='contact-hero'>
        <h1>Get in touch</h1>
        <p>We understand the importance of personal connections, which is why we encourage you to reach out to us with any inquiries, booking requests, or special requirements. Our dedicated team is ready to assist you every step of the way. For immediate assistance, please feel free to contact us at <Link href="tel:+45 52 74 01 30">+45 52 74 01 30</Link> or drop us an email at <Link href="mailto:info@managemyair.dk">info@managemyair.dk</Link>.
        </p>
    </article>
    <div className="contact-information">
      <div className="contact-block">
        <div className="contact-left">
          <Image src='/images/phone-icon.svg' alt='call us icon' width={38} height={38} className="contact-img" />
        </div>
        <div className="contact-right">
          <h5>Call us</h5>
          <Link href="tel:+45 52 74 01 30">+45 52 74 01 30</Link>
        </div>
      </div>
      <div className="contact-block">
        <div className="contact-left">
          <Image src='/images/email-icon.svg' alt='contact us by email icon' width={38} height={38} className="contact-img" />
        </div>
        <div className="contact-right">
          <h5>Email us</h5>
          <p>info@managemyair.dk</p>
        </div>
      </div>
      <div className="contact-some">
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
        <Image src='/images/check-icon.svg' alt='contact image' width={48} height={48} className="contact-img" />
      </div>
    </div>
    </section>
    <ContactForm />
    </div>
    </>
  );
}

export default page;
