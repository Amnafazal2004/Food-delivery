import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Storecontext } from '../../Context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(Storecontext)
  return (
    <div className='fooddisplay' id='fooddisplay'>
        <h2>Top dishes near you</h2>
        <div className="fooddisplaylist">
            {food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return  <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            
               
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
