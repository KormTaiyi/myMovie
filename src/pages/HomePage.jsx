import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrendingPage from '../components/home/TrendingPage'
import TrailerPage from '../components/home/TrailerPage'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <TrendingPage/>
      <TrailerPage/>
    </div>
  )
}

export default HomePage