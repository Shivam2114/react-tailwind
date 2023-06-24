import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({children,open}) => {
  
  return (<>
  
<Header/>
    <div className='container mx-auto p-4 '>
      {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout