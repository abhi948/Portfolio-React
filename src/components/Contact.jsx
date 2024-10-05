import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:1.5}} 
          className="my-20 text-center text-4xl">Get in Touch</motion.h1>
        <motion.div 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:1.5}} 
          className="text-center tracking-tighter">
            <p className='my-4 text-xl'>{CONTACT.address}</p>
            <p className='my-4 text-xl'>{CONTACT.phoneNo}</p>
            <a className='my-4 text-xl' href="#">{CONTACT.email}</a>
            <p><a className='btn btn-outline btn-accent my-4 text-xl' href="https://drive.google.com/file/d/10PecxbJDhC7Mm-R6_CtG2Jchylbtndj2/view?usp=sharing">My Resume/CV</a></p>
        </motion.div>
    </div>
  )
}

export default Contact