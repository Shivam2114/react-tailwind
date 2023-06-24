import React, { useContext } from 'react'
import UserContext from '../Context/Context'

const PlanPackeges = () => {
  const {open}= useContext(UserContext)
  return (

<>
<div data-aos="fade-up"data-aos-delay="400" id='planpackeges'>

<p className='text-center mt-5 font-normal  text-purple-700'>Plans & Packages</p>
<p className='text-4xl text-center font-bold mt-3'>Packages For Developing Websites In India</p>
<div className='grid grid-cols-4  p-3 mt-5'>


<div className="-mt-2 p-5 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
<div className="rounded-2xl bg-blue-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
  <div className="mx-auto max-w-xs px-8">
    <p className="text-2xl font-semibold text-purple-700">BASIC</p>
    <div className="w-full border-b border-gray-300 mt-4"></div>
    <p className="mt-6 flex items-baseline justify-center gap-x-2">
      <span className="text-4xl font-bold tracking-tight text-gray-900"> ₹ 15000/-</span>
     
    </p>
    <p className="mt-6 text-xl font-medium leading-5 text-gray-600">Best for Startup</p>
    <a href="#" className="mt-10 block w-32  rounded-full px-3 py-2 text-center text-sm font-semibold text-white shadow-sm   bg-gradient-to-l from-purple-700 to-blue-400 hover: bg-gradient-to-r from-blue-700 to-purple-400  " >Get Started</a>
      </div>
</div>

</div>
<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
<div className="rounded-2xl bg-blue-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
  <div className="mx-auto max-w-xs px-8">
    <p className="text-2xl font-semibold text-purple-700">PROFESSIONAL</p>
    <div className="w-full border-b border-gray-300 mt-4"></div>
    <p className="mt-6 flex items-baseline justify-center gap-x-2">
      <span className="text-4xl font-bold tracking-tight text-gray-900">₹ 25000/-</span>
    
    </p>
    <p className="mt-6 text-xl font-medium leading-5 text-gray-600">Best for Small Business</p>
    <a href="#" className="mt-10 block  w-32 rounded-full px-3 py-2 text-center text-sm font-semibold text-white shadow-sm   bg-gradient-to-l from-purple-700 to-blue-400 hover: bg-gradient-to-r from-blue-700 to-purple-400  " >Get Started</a>
      </div>
</div>

</div>
<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
<div className="rounded-2xl bg-blue-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
  <div className="mx-auto max-w-xs px-8">
    <p className="text-2xl font-semibold text-purple-700">ULTRA</p>
    <div className="w-full border-b border-gray-300 mt-4"></div>
    <p className="mt-6 flex items-baseline justify-center gap-x-2">
      <span className="text-4xl font-bold tracking-tight text-gray-900">₹ 35000/-</span>
  
    </p>
    <p className="mt-6 text-xl font-medium leading-5 text-gray-600">Best for Large Business</p>
    <a href="#" className="mt-10 w-32 block rounded-full px-3 py-2 text-center text-sm font-semibold text-white shadow-sm   bg-gradient-to-l from-purple-700 to-blue-400 hover: bg-gradient-to-r from-blue-700 to-purple-400  " >Get Started</a>
      </div>
</div>

</div>
<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
<div className="rounded-2xl bg-blue-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
  <div className="mx-auto max-w-xs px-8  ">
    <p className="text-2xl font-semibold text-purple-700">CUSTOMIZE</p>
    <div className="w-full border-b border-gray-300 mt-4"></div>
    <p className="mt-6 flex items-baseline justify-center gap-x-2">
      <span className="text-2xl font-semibold tracking-tight text-gray-900">Get Personalized Website Development</span>
     
    </p>
    <a href="#" className="mt-10 block w-32   rounded-full px-3 py-2 text-center text-sm font-semibold text-white shadow-sm   bg-gradient-to-l from-purple-700 to-blue-400 hover: bg-gradient-to-r from-blue-700 to-purple-400  " >Call Us</a>
    
  </div>
</div>

</div>

</div>
</div>
</>
  )
}

export default PlanPackeges