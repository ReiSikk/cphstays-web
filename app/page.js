import Image from 'next/image'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <NavigationBar />
    <main className={styles.main}>
      <div className={styles.grid}>
        <a
          href="https://www.instagram.com/managemyair/?hl=en"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            ManageMyAir
          </h2>
        </a>
      </div>
    </main>
    <Footer />
    </>
  )
}
