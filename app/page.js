import Image from 'next/image'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <NavigationBar />
    <main className={styles.main}>
      {/* I'm doing a hero section with a background image that has a small filtering window on it and also a list of 3 value propositions */}
      <section>
        <h1>Find a home away from home</h1>
        <div className='hero-container'>
          <Image src='/images/hero-img.webp' alt='hero image' width={1200} height={800} className="hero-img" />
          <div className='filtering'>
            <h3>Find your perfect apartment and send a request</h3>
            <div className='hero-filter-container'>
            <div className='filtering-inputs'>
              <label htmlFor='location'>Location
            <select name="location" id="location" className="location">
             <option value="all" defaultValue>
              All locations
            </option>
             <option value="Østerbro">Østerbro</option>
             <option value="Nørrebro">Nørrebro</option>
             <option value="Vesterbro">Vesterbro</option>
             <option value="IndreBy">Indre By</option>
             <option value="Amager">Amager</option>
             <option value="Valby">Valby</option>
             <option value="Nordvest">Nordvest</option>
             <option value="Bispebjerg">Bispebjerg</option>
             <option value="Vanløse">Vanløse</option>
             <option value="Vanløse">Brønshøj-Husum</option>
            </select>
              </label>
              <label htmlFor='price'>Price</label>
            <input type="text" placeholder="Enter rent" name="price" id="price" className="price "></input>
            </div>
            <button className="search-btn">
              <Image src='/images/search-icon.svg' alt='search icon' width={24} height={24} className="search-img" />
            </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
