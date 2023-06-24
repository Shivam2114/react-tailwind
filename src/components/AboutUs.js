import React from 'react'
import {FaCogs,FaPhone} from 'react-icons/fa'
const AboutUs = () => {
  return (
    <><div id='aboutus'data-aos="fade-up" data-aos-delay="400"className='grid grid-cols-2 gap-4  mt-6 p-8'>

    <div>
    <p className=' font-normal  text-purple-700 '>Hire India's</p>
        <p className='text-4xl font-bold '>
        Hire the Top Website Development Company in India Today To Create Your Business Website!
        </p>
        <p className='mt-5'>
        For the best mobile-responsive and SEO-friendly website development services in India,
         contact Techinaut Technologies, a renowned firm in the country. In contrast to the
         <p className='font-bold'>
         fact that 30% of small businesses with a web presence generate more than 25% of their 
         revenue online, more than 60% of small firms have websites
         </p>
         In addition, 31% of business owners employ a web design firm.


        </p>
        <p className='mt-6'>
        Call us for FREE website consulting to learn what kinds of websites you need to build your business more quickly and with less effort. 
        For the best website development services in India, contact Techinaut Technologies today.
        </p>


        <a href='#' className="mt-10  block w-1/3 flex rounded-full px-4 py-3 text-center text-sm font-semibold text-white shadow-sm   bg-gradient-to-l from-purple-700 to-blue-400 " >
    <i className='mr-2 ml-4 mt-1'>
    <FaPhone/></i> +91-89741799654</a>
    </div>
    <div className='mt-9'>
        <img src='https://www.techinautservices.com/website-development-company/img/Untitled-1-01.png' alt='aboutimage'/>
    </div>
    </div>
    </>
  )
}

export default AboutUs