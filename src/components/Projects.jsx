import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from 'framer-motion'
export const Projects = () => {
  return (
    <>
        <div className="border-b border-neutral-900 pb-4 ">
        <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}} 
            className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>
              {PROJECTS.map((project, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                  <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}} 
                    className='w-full lg:w-1/4'>
                    <img 
                      src={project.image} alt={project.title}
                      width={150}
                      height={150}
                      className='mb-6 rounded'
                      />
                  </motion.div>
                  <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:0.5}} 
                    className='w-full max-w-xl lg:w-3/4'>
                    <h5 className='mb-2 font-semibold'>{project.title}</h5>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tecch, index)=>(
                      <span className='mr-2 rounded mt-4 bg-neutral-900 px-2 py-1 text-sm
                      font-medium text-purple-800'>
                        {tecch}
                      </span>
                    ))}
                  </motion.div>
                </div>
              ))}
              <div>

              </div>
            </div>
        </div>    
    </>
  )
}
