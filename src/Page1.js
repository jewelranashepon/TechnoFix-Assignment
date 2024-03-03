import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustedSection from './components/TrustedSection'
import FeatureSection from './components/FeatureSection'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionTheree from './components/SectionTheree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'

const Page1 = () => {
  return (
    <>
    <div className="space-y-10">
      <Header/>
      <HeroSection/>
      <TrustedSection/>
      <FeatureSection/>
      <SectionOne/>
      <SectionTwo/>
      <SectionTheree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
    </div>
        
    </>
  )
}

export default Page1