import React from 'react'
import LoginPage from './LoginPage'
import Link from 'next/link'
import Image from 'next/image'




const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav-item'>
        
          <Link href='/'><Image src='/logo.png' width={150} height={50} alt='netflix logo'/></Link>
            <LoginPage/>
      
    </div>
    

   
 
     </div>
  )
}

export default Navbar