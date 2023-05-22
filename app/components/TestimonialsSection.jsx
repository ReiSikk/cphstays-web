
import React, { useRef, useState } from "react";
import Image from 'next/image'




import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
    const data = [
        {
            id: 1,
            name: 'John Doe',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 2,
            name: 'Nancy Doe',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 3,
            name: 'Mike Doe',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 4,
            name: 'Jane Doe',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 5,
            name: 'John Smith',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 6,
            name: 'Carl Smith',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },

    ]
    
    
  return (
    <>
    <section className="user-testimonials-wrapper">
<span className='small-label'>Lorem ipsum</span>
    <h3>What our guests say</h3>
    <div className="user-testimonials-section">
{data.map(user => (
    <TestimonialCard key={user.id} user={user} className="testimonial-card"/>
))}
</div>
    </section>
      </>
  )
}

export default TestimonialsSection