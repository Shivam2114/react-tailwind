
import React, { useContext, useEffect, useState } from 'react'
import { FaPhone } from "react-icons/fa";

import { Link } from 'react-scroll';
import UserContext from '../Context/Context';
const Header = () => {
	const [underbar, SetUnderBar] = useState('home')
	const {open,setOpen}= useContext(UserContext)
	const [windowSize, setWindowSize] = useState(getWindowSize());
	function getWindowSize() {
		return window.pageYOffset;
	}
	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}
		window.addEventListener('scroll', handleWindowResize);
		return () => {
			window.removeEventListener('scroll', handleWindowResize);
		};
	}, []);
	
	
	const handleBar = (prop) => {
		SetUnderBar(prop)

	}
	const handleChange=()=>{
		setOpen(!open)
	}
	
	
	useEffect(() => {
		
		if (windowSize <= 450) {
			SetUnderBar('home')
		} else if (windowSize > 450 && windowSize <= 1050) {
			SetUnderBar('about')
		} else if (windowSize > 1050 && windowSize < 1500) {
			SetUnderBar('plan&packeges')
		} else if (windowSize >= 1500 && windowSize <= 3280) {
			SetUnderBar('ourservice')
		} else if (windowSize > 3280 && windowSize < 5000) {
			SetUnderBar('pricing')
		} else {
			SetUnderBar('contact')
		}
	}, [windowSize])

	return (
		<>
			<nav className={!open?"bg-white text-black shadow-lg sticky top-0 relative z-50":"bg-gray-700 text-white shadow-lg sticky top-0 relative z-50"}>
				<div className="max-w-6xl mx-auto px-4 ">
					<div className="flex justify-between">
						<div className="flex space-x-7">
							<div>

								<Link to='home' className="flex items-center py-4 px-5">
									{/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/> */}
									<button onClick={() => handleBar('home')} className="font-semibold  text-lg hover:text-green-500 transition duration-300 ">IT SERVICE</button>
								</Link>
							</div>

							<div className="hidden md:flex items-center space-x-4 ">
								<Link to='home' className="  py-4 px-2  font-semibold hover:text-green-500 transition duration-300 ">
									<button className={underbar === 'home' ? 'underline decoration-4 decoration-gray-500' : ''} onClick={() => handleBar('home')}>Home</button></Link>
								<Link to="aboutus" className="py-4 px-2  font-semibold hover:text-green-500 transition duration-300">
									<button className={underbar === 'about' ? 'underline decoration-4 decoration-gray-500' : ''} onClick={() => handleBar('about')}>About Us</button></Link>
								<Link to="planpackeges" className="py-4 px-2  font-semibold hover:text-green-500 transition duration-300">
									<button className={underbar === 'plan&packeges' ? 'underline decoration-4 decoration-gray-500' : ''} onClick={() => handleBar('plan&packeges')}>Plan&Packeges</button></Link>
								<Link to="ourservices" className="py-4 px-2  font-semibold hover:text-green-500 transition duration-300">
									<button className={underbar === 'ourservice' ? 'underline decoration-4 decoration-gray-500' : ''} onClick={() => handleBar('ourservice')}>OurServices</button></Link>
								<Link to="pricing" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">
									<button className={underbar === 'pricing' ? 'underline decoration-4 decoration-gray-500' : ''} onClick={() => handleBar('pricing')}>Pricing</button></Link>
								<Link to="contactus" className="py-4 px-2  font-semibold hover:text-green-500 transition duration-300">
									<button className={underbar === 'contact' ? 'underline decoration-4 decoration-gray-500' : ''} onClick={() => handleBar('contact')}>Contact</button></Link>
							</div>
						</div>

						<div className="hidden md:flex items-center space-x-3 ">
							<button className='rounded-full px-4 py-2 flex  mr-5  bg-gradient-to-l from-purple-700 to-blue-400 text-white  '> <i className='mr-2 ml-4 mt-1'>
								<FaPhone /></i>+91 87141799654</button>
						</div>
						<div className='mt-5'>
    <input
          className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary dark:checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
		style={{backgroundColor:open?"green":''}}
      type="checkbox"
	  checked={open?true:false}
	  value={open}
      role="switch"
      id="flexSwitchCheckDefault"
	  onChange={handleChange} />
   
  </div>
						<div className="md:hidden flex items-center">
							<button className="outline-none mobile-menu-button">
								<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
									x-show="!showMenu"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* <div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Feature</a></li>
          <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Pricing</a></li>
          <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Review</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact </a></li>
				</ul>
			</div> */}

			</nav>
		</>
	)
}

export default Header