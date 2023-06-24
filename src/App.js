
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import OurServices from './components/OurServices';
import PlanPackeges from './components/PlanPackeges';
import Pricing from './components/Pricing';

import Layout from './Layout/Layout';
import ChildLayout from './Layout/ChildLayout';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserContext from './Context/Context';

function App() {
  const [open,setOpen]= useState(false)
  // const location = useLocation();

  // useEffect(() => {

  //   window.scrollTo(0, 0);
  // }, [location]);
  
  useEffect(() => {
    AOS.init();
  }, [open])
  return (
  
    <>
    <div data-aos="fade-in" data-aos-delay="200" className={open?'bg-black text-white':''}>
    <UserContext.Provider value={{open,setOpen}} >
   <Layout >
    <ChildLayout />
   </Layout>
   </UserContext.Provider>
   </div>
    </>
  );
}

export default App;
