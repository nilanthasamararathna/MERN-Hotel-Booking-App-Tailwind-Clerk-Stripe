import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Terstimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers/>
        <Terstimonial />
    </>
  )
}

export default Home