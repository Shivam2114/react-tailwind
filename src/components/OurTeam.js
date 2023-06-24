import React, { useContext } from 'react'
import UserContext from '../Context/Context'

const OurTeam = () => {
    const {open}= useContext(UserContext)
  return (
    <>
   
<div class="py-20  " id='ourteam'data-aos="fade-up" data-aos-delay="400" className={!open?'text-black':'text-white'}>
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl  font-bold md:text-4xl">What Say Our Team!</h2>
            <p class=" lg:w-8/12 lg:mx-auto">IT Services itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 class="text-2xl">Hentoni Doe</h4>
                    <span class="block text-sm ">CEO-Founder</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl">Jonathan Doe</h4>
                    <span class="block text-sm ">Chief Technical Officer</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg" alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl">Anabelle Doe</h4>
                    <span class="block text-sm ">Chief Operations Officer</span>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default OurTeam