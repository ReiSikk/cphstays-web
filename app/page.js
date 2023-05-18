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
    <Footer />
    </>
  )
}
