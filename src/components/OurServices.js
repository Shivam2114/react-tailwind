import React, {  useEffect, useState } from 'react'
import { FaCheck ,FaPhone,} from "react-icons/fa";

import { ServicesData } from '../store';
const OurServices = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const[cardNo,setCardNo]= useState(0)
    const[user,setUser]= useState([])
	function getWindowSize() {
		return window.pageYOffset;
	}
   
	useEffect(() => {
        setCardNo(3)
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener('scroll', handleWindowResize);
		return () => {
			window.removeEventListener('scroll', handleWindowResize);
		};
	}, []);
    useEffect(()=>{
if(windowSize>1500&& windowSize<=1800){
   setUser( ServicesData.slice(0,cardNo))

}else if (windowSize>1800&& windowSize<=2100){
setUser(ServicesData.slice(0,cardNo+3))

}
else if(windowSize>2100){
    setUser(ServicesData)
}
 },[windowSize])

	
  return (
    <>
    <div data-aos="fade-up" data-aos-delay="400" id='ourservices'>
    <p className='text-center mt-5 font-normal  text-purple-700'>Our Services</p>
<p className='text-4xl text-center font-bold mt-3'>Web Design & Development Services</p>

<div className='grid grid-cols-3 gap-3  mt-6 p-8'>
    {user.map((item)=>{return(
    <div className="rounded-2xl  bg-blue-50 py-7  ring-1 ring-inset ring-gray-900/5 lg:flex-col lg:justify-center lg:py-10">
    
    <div className='flex ml-4  w-14 bg-gradient-to-l from-purple-700 to-blue-400  h-14 rounded-full'>
         <i className='text-center text-white pl-4 pt-4 text-2xl'>{item.icon}</i>
         </div>
         <div className='p-5 mr-3'>
        <p className=' text-xl text-black font-bold '>{item.title}</p>
        <p className='text-black '> {item.about} </p>
        </div>
    </div>
    )})}
    </div>

<div id='ourworking' data-aos="fade-up" data-aos-delay="200"data-aos-anchor-placement="top-center"className='grid grid-cols-3 gap-8  mt-6  p-8'>
<div className='ml-5 col-span-2'>
<p className='text mt-5 font-normal   text-purple-700'></p>
<p className='text-4xl text-center font-bold mt-3'>Benefits Of Working With Us To Build Your Website</p>
<p className=' p-8'>
A quality website offers several chances to demonstrate your authenticity. When you choose us, you can relax knowing that we'll take care of your
 website's design and development needs as well as SEO services to improve website ranking.
</p>
<p className='ml-8 mt-5 flex'><i className='text-purple-700 mr-3 items-center'><FaCheck/></i>We Create Real</p>
<p className='ml-8 mt-5 flex'> <i className='text-purple-700 mr-3 items-center'><FaCheck/></i>We Are Inexpensive</p>
<p className='ml-8 mt-5 flex'> <i className='text-purple-700 mr-3 items-center'><FaCheck/></i>Quick and Reliable</p>
<p className='ml-8 mt-5 flex'> <i className='text-purple-700 mr-3 items-center'><FaCheck/></i>SEO Friendly Web Development</p>
<p className='ml-8 mt-5 flex'> <i className='text-purple-700 mr-3 items-center'><FaCheck/></i>We Are Wide-ranging</p>
<a href='/' className="mt-10 ml-8 block w-1/4 flex rounded-full px-4 py-3 text-center text-sm font-semibold text-white shadow-sm   bg-gradient-to-l from-purple-700 to-blue-400 " >
    <i className='mr-2 ml-4 mt-1'>
    <FaPhone/></i> +91 89741799654</a>
  
</div>
<div className='text-center mt-7 relative'>

    <div className='relative left-4 top-4 w-[217px]'><img src='https://www.techinautservices.com/website-development-company/img/5.png' alt='phone'/>
   </div>
   <div  className='absolute top-1  '>
    <img src='https://www.techinautservices.com/website-development-company/img/screenshot-frame.png' alt='inner'/>
   </div>
   
</div>
</div>
</div>
    </>
  )
}

export default OurServices