import React from 'react'
import AboutTop from './aboutTop'
import AboutUs from './aboutUs'
import WhyChooseAbout from './whychooseabout'
import TestimonialsAbout from './testimonialsAbout'
import TeamMember from './teamMember'
import OurFoodMenu from './ourFoodMenu'

const AboutMain = () => {
  return (
    <div className="bg-myWhite relative z-0">
      <AboutTop/>
      <AboutUs/>
      <WhyChooseAbout/>
      <TeamMember/>
      <TestimonialsAbout/>
      <OurFoodMenu/>
    </div>
  )
}

export default AboutMain