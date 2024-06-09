import React from 'react'
import Statics from './Statics'
import Carousel from '../Carousel'
import Images from './Images'
import Contact from '../Contact'
import Header from './Header'

export default function Main() {
  return (
      <>
      <div className="container mx-auto p-4">
      <Header />
      <Statics />
      <Carousel />
      <Images />
      <Contact />
    </div>
      </>
  )
}
