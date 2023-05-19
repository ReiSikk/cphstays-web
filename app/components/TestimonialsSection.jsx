
import React, { useRef, useState } from "react";
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";


import TestimonialUserCard from "./TestimonialsUserCard";

function TestimonialsCarousel() {
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
    <h3>Corporate clients</h3>
    <div className="user-testimonials-section">
{data.map(user => (
    <TestimonialUserCard key={user.id} user={user} className="testimonial-card"/>
))}
</div>
    </section>
      </>
  )
}

export default TestimonialsCarousel