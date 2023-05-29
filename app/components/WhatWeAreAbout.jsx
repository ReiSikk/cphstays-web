import React from 'react'
import Image from 'next/image'

function WhatWeAreAbout() {
  return (
    <section className='testimonials-wrapper'>
    <span className='small-label'>Lorem ipsum</span>
        <h3>What we are about</h3>
        <div className="testimonials-section">
        <div class="testimonial-card">
            <div className="icon-flex">
          <div class="small-icon">
            <Image src='/images/mission.svg' alt='testimonial icon' width={28} height={28} className="small-icon" />
          </div>
          <h4>Our mission</h4>
            </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div class="testimonial-card">
            <div className="icon-flex">
          <div class="small-icon">
            <Image src='/images/vision.svg' alt='testimonial icon' width={28} height={28} className="small-icon" />
          </div>
          <h4>Our vision</h4>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div class="testimonial-card">
            <div className="icon-flex">
          <div class="small-icon">
            <Image src='/images/values.svg' alt='testimonial icon' width={28} height={28} className="small-icon" />
          </div>
          <h4>Our values</h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic aliquam nihil sapiente exercitationem perspiciatis magnam quidem.</p>
        </div>
        </div>
    </section>
  )
}

export default WhatWeAreAbout