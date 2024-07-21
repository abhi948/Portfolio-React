import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className='mb-14 flex items-center justify-between py-6 '>
        <div className='flex felx-shrink-0 items-center'>
            {/* <img src={logo} alt='' /> */}
            <h1 className='text-6xl'>Ay</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.instagram.com/abhhisheekkk/"><FaInstagram /></a> 
            <a href="https://www.linkedin.com/in/abhhisheekkk"><FaLinkedin/></a>
            <a href='https://x.com/'><FaTwitter /></a>
            <a href='https://github.com/abhi948'><FaGithub/></a>
        </div>
    </nav>
  )
}
