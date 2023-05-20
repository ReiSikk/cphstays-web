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
      <main className={styles.main}></main>
    <Footer />
    
    </>
  )
}
