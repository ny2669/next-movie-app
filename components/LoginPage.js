import React from 'react'


import { useSession, signIn, signOut } from "next-auth/react"


export default function Component() {
  const { data: session } = useSession()

  

  if (session) {
    return (
      <>
      <p className='Notsignin'>  Welcome, {session.user.name} </p>
   
        <button className='red2' onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
    <p className='Notsignin'>You are not signed in</p>
   
      <button className='red2' onClick={() => signIn()}>Sign in</button>
    </>
  )
}
    
  





