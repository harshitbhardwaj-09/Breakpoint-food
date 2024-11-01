import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/categoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
function Home() {
  return (
    <>
       <Navbar />
       <CategoryMenu />
       <FoodItems />
       <Cart />
    </>
  )
}

export default Home