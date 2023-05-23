/* import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; */
import ApartmentCard from "./ApartmentCard";


/* const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY"
  }
];

export default function ImageCarousel() {
    return (
        <div>
            <Carousel>
            <div className="carousel-card">
                <ApartmentCard />
            </div>      
            <div className="carousel-card">
                <ApartmentCard />
            </div>      
            <div className="carousel-card">
                <ApartmentCard />
            </div>      
            
                </Carousel>
        </div>
    );
} */


import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
//import the carousel css file into the component
import '../carousel.css';

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const calculateVisibleItems = () => {
      const viewportWidth = window.innerWidth;
      const itemWidth = carouselRef.current?.offsetWidth || 0;
      const visibleItems = Math.floor(viewportWidth / itemWidth);
      return visibleItems;
    };

    const handleResize = () => {
      setVisibleItems(calculateVisibleItems());
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    setVisibleItems(calculateVisibleItems());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  useEffect(() => {
    setCurrentIndex(0); // Reset currentIndex when images change
  }, [images]);

  if (images.length === 0) {
    return null; // Return null if images array is empty
  }

  const getTransformValue = () => {
    const itemWidth = carouselRef.current.offsetWidth / visibleItems;
    return `translateX(-${currentIndex * itemWidth}px)`;
  };

  return (
    <div className="carousel">
      <div className="carousel-container" ref={carouselRef}>
        {images.map((image, index) => (
          <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <Image src={image.src} alt={image.alt} width={400} height={500} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>
          &larr;
        </button>
        <button className="carousel-next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

