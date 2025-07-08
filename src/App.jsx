import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Modal from './components/Modal'
import * as Sentry from '@sentry/react'
import Features from './components/Features'
import HowItsWorks from './components/HowItsWorks'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlight />
      <Modal />
      <Features />
      <HowItsWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
