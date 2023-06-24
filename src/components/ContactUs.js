import React, { useContext } from 'react'
import UserContext from '../Context/Context'

const ContactUs = () => {
  const {open}= useContext(UserContext)
  return (
    <> <div data-aos="fade-up" id='contactus' data-aos-delay="400">
     <p className='text-center mt-10 font-normal  text-purple-700'>Contact Us</p>
    <p className='text-4xl text-center font-bold mt-3'>Get In Touch!</p>
    <p className='text-center mt-5 font-normal'>
    Interested in our IT services or need advice? Then please get in touch and we’ll be glad to help.
    </p>
    <section className={!open?'bg-white text-black':' bg-black text-white'}>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
     
    
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Mail" />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium  dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-blue-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder=" how we can help you" />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium  dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-blue-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          {/* <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Send message</button> */}
           <button type="submit" className="mt-10  block w-1/4 flex rounded-full px-4 py-3  text-center text-sm font-semibold text-white shadow-sm   bg-gradient-to-l from-purple-700 to-blue-400 " >Submit</button>
      </form>
  </div>
</section>
</div>
    </>
  )
}

export default ContactUs