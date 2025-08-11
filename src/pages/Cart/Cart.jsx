import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(Storecontext);
  const navigate =useNavigate();
  return (
    <div className='cart'>
      <div className="cartitems">
        <div className="cartitemstitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cartitemstitle cartitemsitem">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)}className='cross'>x</p>
                </div>
                <hr />

              </div>
            )
          }
        })}
      </div>
      <div className="cartbottom">
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
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cartpromocode">
          <div>
            <p>If you have a promo code. Enter it here</p>
            <div className="cartpromocodeinput">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart