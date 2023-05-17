"use client"
import Image from 'next/image'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import SelectAutoWidth from './components/SelectAutoWidth'
import BasicTextFields from './components/BasicTextFields'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <NavigationBar />
    <main className={styles.main}>
      <section>
        <h1>Find a home away from home</h1>
        <div className='hero-container'>
          <Image src='/images/hero-img.webp' alt='hero image' width={1200} height={800} className="hero-img" />
          <div className='hero-cta'>
            <h3>Find your perfect apartment and send a request</h3>
            <div className='hero-cta-container'>
              <Link href='/apartments' className='secondary-btn'>See the apartments</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
