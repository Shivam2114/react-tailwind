import React from 'react'

const Home = () => {
    return (
        <div data-aos="fade-up"data-aos-delay="400" className='grid grid-cols-3 p-4 gap-8' id='home'>
            <div className='col-span-2 container mx-auto p-4 overflow-hidden'>
                <p className='font-medium'>Website Development Company of India</p>
                <p className='text-3xl font-bold mt-5 '>Services for Modern Website <br /> Design & Development</p>
                <p className='mr-4 mt-5'>Are you a seeking one of your High Performing Web Applications
                    designed by an Indian company? Techinaut Services offers the best website design &
                    development services at very affordable costs. It seems impossible to design your ideal website?
                    But with Techinaut Services you'll
                    succeed for sure since we have the resources, knowledge, and innovative vision you need.</p>
                <p className='mr-4 mt-5'>Hire us to build a unique website for your business right away 
                by visiting our website development packages!</p>
                <div className='mt-5  '>
                    <button className='rounded-full px-4 py-3 w-1/4 mr-5  bg-gradient-to-l from-purple-700 to-blue-400 text-white hover:bg-gradient-to-l from-purple-700 to-blue-400 '>Read More</button>
                    <button className='rounded-full px-4 py-3 w-1/4  bg-gradient-to-l from-purple-700 to-blue-400 text-white hover:bg-gradient-to-l from-purple-700 to-blue-400 '>Contact Us</button>
                </div>
            </div>

            <div className='text-center mt-7 relative mb-9 '>

                <div className='relative left-4 top-4 w-[217px] flex justify-end'><img src='https://www.techinautservices.com/website-development-company/img/5.png' alt='phone' />
                </div>
                <div className='absolute top-1  '>
                    <img src='https://www.techinautservices.com/website-development-company/img/screenshot-frame.png' alt='inner' />
                </div>

            </div>
        </div>
    )
}

export default Home