import React from 'react'
import {RiReactjsLine, RiJavascriptFill} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs, FaJava, FaPython} from 'react-icons/fa'
import {animate, easeIn, motion} from 'framer-motion'

const iconVariants = (duration) =>({
    intial : {y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType : "reverse"
        }
    }
})

export const Tech = () => {
  return (
    <>
        <div className="border-b border-neutral-900 pb-4 ">
            <motion.h1 
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0, y:-100}}
             transition={{duration:0.5}} 
            className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:0.5}} 
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={iconVariants(2.5)} initial='initial' animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)} initial='initial' animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl text-green-500'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(4.5)} initial='initial' animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl text-green-600'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(5.5)} initial='initial' animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className='text-7xl text-red-700'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(6.5)} initial='initial' animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className='text-7xl text-yellow-600'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(7.5)} initial='initial' animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptFill className='text-7xl text-yellow-600'/>
                </motion.div>

            </motion.div>
        </div>
    </>
  )
}
