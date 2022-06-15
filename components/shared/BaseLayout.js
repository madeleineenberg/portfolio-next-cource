import React from 'react'
import Header from './Header'

export default function BaseLayout({children}) {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}
