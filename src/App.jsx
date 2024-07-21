import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import About from './components/About'
import { Tech } from './components/Tech'
import { Exp } from './components/Experience'
import { Projects } from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 
      selection:text-cyan-500'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute inset-0 -z-10 h-full w-full items-center 
          px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          </div>
        </div>

        <div className=' mx-6 px-8'>
          <Navbar />
          <Hero />
          <About/>
          <Tech/>
          <Exp/>
          <Projects/>
          <Contact/>
        </div>
      </div>

    </>
  )
}