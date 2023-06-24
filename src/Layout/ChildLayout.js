import React from 'react'

import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Home from '../components/Home'
import OurServices from '../components/OurServices'
import OurTeam from '../components/OurTeam'
import PlanPackeges from '../components/PlanPackeges'
import Pricing from '../components/Pricing'
const ChildLayout = () => {
  return (
    <>
   <Home/>
   <AboutUs/>
    <PlanPackeges/>
    <OurServices/>
    <Pricing/>
    <OurTeam/>
    <ContactUs/>

    </>
  )}      
    

export default ChildLayout