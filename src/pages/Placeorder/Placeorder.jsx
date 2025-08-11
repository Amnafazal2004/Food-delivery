import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../Context/Storecontext'
const Placeorder = () => {
  const {getTotalCartAmount}=useContext(Storecontext);
  return (
    <form className='placeorder'>
      <div className="placeorderleft">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input type="text"placeholder='First Name' />
          <input type="text " placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="placeorderright">
      <div className="carttotal">
          <h2>Cart Totals</h2>
          <div>
            <div className="carttotaldetails">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="carttotaldetails">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to Payment</button>
        </div>
      </div>
      
    </form>
  )
}

export default Placeorder