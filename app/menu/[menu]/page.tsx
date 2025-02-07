import React from 'react'
import StarterMenu from './startermenu'
import MainCourse from './mainCourse'
import MenuTop from './menuTop'
import Dessert from './dessert'
import Drinks from './drinks'
import MenuFooter from './menuFooter'

const MainMenu = () => {
  return (
    <div className='bg-myWhite'>
        <MenuTop/>
<StarterMenu/> 
<MainCourse/>
<Dessert/>
<Drinks/>
<MenuFooter/>
 </div>
  )
}

export default MainMenu
