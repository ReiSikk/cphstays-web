"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import styles from './page.module.css'
import Link from 'next/link'
import HDIWsection from './components/HDIWsection'
import ApartmentsCarousel from './components/ApartmentsCarousel'
import TestimonialsSection from './components/TestimonialsSection'
import FaqAccordion from './components/FaqAccordion'
import ContactForm from './components/ContactForm'
import ImageCarousel from './components/Carousel'


export default function Home() {

  /* Gets rid of the Hydration error */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  
  if (!mounted) return null; 

/*   const images = [
    { src: '/images/apt_example.jpg', alt: 'Image 1' },
    { src: '/images/apt_example.jpg', alt: 'Image 2' },
    { src: '/images/apt_example.jpg', alt: 'Image 3' },
    { src: '/images/apt_example.jpg', alt: 'Image 4' },
    { src: '/images/apt_example.jpg', alt: 'Image 5' },
    // Add more images as needed
  ]; */



  return (
    <>
    <header className={styles.header}>
    <NavigationBar />
    <section className={styles.hero}>
      <div className={styles.hero_inner}>
      <div className={styles.hero_text}>
      <h1 className={styles.hero_title}>Call to action text</h1>
      <p className={styles.hero_paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, magna libero sodales massa, sed aliquam nunc massa id nisl.</p>
      </div>
      <div className={styles.hero_numbers}>
        <div className={styles.hero_numbers_block}>
          <h3>200+</h3>
          <p>Rented homes</p>
        </div>
        <div className={styles.hero_numbers_block}>
          <h3>1000+</h3>
          <p>Happy guests</p>
        </div>
        <div className={styles.hero_numbers_block}>
          <h3>15+</h3>
          <p>Years of experience</p>
        </div>
      </div>
      <Link href="/apartments" className={styles.secondary_btn}>See apartments</Link>
      </div>
    </section>
      </header> 
      <main className={styles.main}>
      <section className='testimonials-wrapper'>
<span className='small-label'>Lorem ipsum</span>
    <h3>Services we offer</h3>
    <div className="testimonials-section">
    <div className={styles.landingpage_card}>
      <div className={styles.card_link_wrapper}>
        <Image src='/images/star.svg'  width={28} height={28} alt='star' />
        <Link href="/apartments" className={styles.card_link}>
          <span>Read more</span>
          <span>
            <Image src='/images/arrow-right.svg'  width={28} height={28} alt='right arrow' />
            </span>
        </Link>
      </div>
      <div className={styles.card_content}>
      <h4>Title 1</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
    <div className={styles.landingpage_card}>
      <div className={styles.card_link_wrapper}>
        <Image src='/images/star-darkblue.svg'  width={28} height={28} alt='star' />
        <Link href="/apartments" className={styles.card_link}>
          <span>Read more</span>
          <span>
            <Image src='/images/arrow-right-black.svg'  width={28} height={28} alt='right arrow' />
            </span>
        </Link>
      </div>
      <div className={styles.card_content}>
      <h4>Title 1</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
    <div className={styles.landingpage_card}>
      <div className={styles.card_link_wrapper}>
        <Image src='/images/star-darkblue.svg'  width={28} height={28} alt='star' />
        <Link href="/apartments" className={styles.card_link}>
          <span>Read more</span>
          <span>
            <Image src='/images/arrow-right-black.svg'  width={28} height={28} alt='right arrow' />
            </span>
        </Link>
      </div>
      <div className={styles.card_content}>
      <h4>Title 1</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
   
    </div>
    </section>
    <HDIWsection  />
    <ApartmentsCarousel />
    <TestimonialsSection />
   {/*  <ImageCarousel images={images} /> */}
    <section className={styles.faq_and_contact}>
    <FaqAccordion />
    <ContactForm />
    </section>

      </main>
    <Footer />
    
    </>
  )
}
