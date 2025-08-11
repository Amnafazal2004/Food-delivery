import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/Storecontext';

const FoodItem = ({id,name,price,description,image}) => {
 
  const {cartItems,addToCart,removeFromCart} =useContext(Storecontext);
  
  return (
    <div className='fooditem'>
        <div className='fooditemimagecontainer'>
            <img className='fooditemimage'src={image} alt="" />
            {
              !cartItems[id]
               ?<img className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white} alt="" />
               : <div className='fooditemcounter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)}src={assets.add_icon_green} alt="" />
               </div>
            }
        </div>
        <div className="fooditeminfo">
           <div className="fooditemnamerating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
           </div>
           <p className="fooditemdesc">
            {description}
           </p>
           <p className="fooditemprice">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
