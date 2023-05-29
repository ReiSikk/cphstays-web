import React from 'react'
import Image from 'next/image'

function WhyChooseUs() {
  return (
    <>
    <section className='testimonials-wrapper'>
<span className='small-label'>Lorem ipsum</span>
    <h3>Why choose us</h3>
    <div className="testimonials-section">
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/money-icon.svg' alt='money icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>Save money</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/shield-icon.svg' alt='shield icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>Peace of mind</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/clipboard-icon.svg' alt='clipboard icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>All inclusive service</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic aliquam nihil sapiente exercitationem perspiciatis magnam quidem.</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/handshake-icon.svg' alt='handshake icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>Customer service</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet a dolorum quam ducimus cupiditate, voluptas itaque magnam. Reiciendis non, asperiores qui!</p>
    </div>
    </div>
</section>
<article className='our-partners'>
    <h3>Our partners</h3>
    <div className="partners-section">
      <div className="partners-flex">
        <Image src='/images/airbnb.svg' alt='airbnb logo' width={28} height={28} className="testimonial-icon" />
        <Image src='/images/logo-2.svg' alt='logo' width={28} height={28} className="testimonial-icon" />
        <Image src='/images/logo-3.svg' alt='logo' width={64} height={64} className="testimonial-icon" />
        <Image src='/images/logo-4.svg' alt='logo' width={64} height={64} className="testimonial-icon" />
      </div>
    </div>
    </article>
 </>
  )
}

export default WhyChooseUs