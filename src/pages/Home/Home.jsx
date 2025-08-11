import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AddDownload from '../../Components/AddDownload/AddDownload'


const Home = () => {
  //this is for when we need to sort things in categories
  const [category,setCategory]=useState("All");
  return (
    <div>
     <Header/>
     <ExploreMenu category={category} setCategory={setCategory}/>
     <FoodDisplay category={category}/>
     <AddDownload/>
    </div>
  )
}

export default Home