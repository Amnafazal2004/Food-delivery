import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(0);

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            //prev represents the currently existing elements in the cart
            //...prev here works as creating a shallow copy of the cartitems
            //itemid is the parameter (jb hum ye function use kareingy to is ko apnay product ki 
            //id pass kareyingy)
            //now what [itemid]:1 does is that it assigns one to that item id
            //to ab cartitems k ander aesa hua hai
            //cartitems =[
            //{ prev:0,
            //  004(id we assigned to the product) :1 (make the quantity one)
            //}]
            setCartItems((prev) => (
                                  { ...prev,
                                   [itemId]: 1 }
                                ))
        }
        else {
            //agar wapis + dabaya to ab
            //cartitems =[
            //{ 
            //  004(id we assigned to the product) :1 (make the quantity one),
            //  003(new id we are adding): 1 (check kareyga k peechay prev[003] per jo quantity hai us main + 1, yahan 003 pehli baar daala to 0+1)
            //}]
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalamount = 0;
        //now item will be the id we provided in add to cart function
        //it will iterate through these ids in cartitems 
        //if cartitems[003] per quantity is greate than 1 then it will provide the item info 
        //of that product                                                           
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalamount += iteminfo.price * cartItems[item];
            }

        }
        return totalamount;
    }
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider