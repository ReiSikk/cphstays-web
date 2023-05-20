import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
<section className='testimonials-wrapper'>
<span className='small-label'>Lorem ipsum</span>
    <h3>Services we offer</h3>
    <div className="testimonials-section">
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/check-icon.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>Title 1</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/check-icon.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>Title 1</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/check-icon.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>Title 1</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic aliquam nihil sapiente exercitationem perspiciatis magnam quidem.</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/check-icon.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h4>Title 1</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet a dolorum quam ducimus cupiditate, voluptas itaque magnam. Reiciendis non, asperiores qui!</p>
    </div>
    </div>
</section>

  )
}

export default Testimonials