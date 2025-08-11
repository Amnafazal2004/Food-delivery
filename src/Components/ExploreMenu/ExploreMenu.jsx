import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore Our Menu</h1>
        <p  className='exploremenutext'>Kick off your meal with our delicious starters! Enjoy our crispy, golden calamari, perfectly seasoned and served with a tangy lemon aioli. For a lighter option, try our fresh garden salad, tossed with a vibrant mix of seasonal vegetables and a zesty vinaigrette.</p>
        <div className='exploremenulist'>
            {menu_list.map((item,index)=>
            {
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className="ExploreMenulistitems">
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
