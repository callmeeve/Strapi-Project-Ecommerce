import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function UserLayout({children}) {
  return (
    <>
        <Nav/>
        {children}
        <Footer/>
    </>
  )
}
