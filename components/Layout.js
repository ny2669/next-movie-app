import React from 'react'
import Navbar from "../components/Navbar";

const Layout = ({children}) => {
  return (
    <>
   <header className=''>
<Navbar/>
   </header>
 <main>{children}</main>
 <footer>

 </footer>

 </>
  )
}

export default Layout