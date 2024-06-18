import { createContext,useState } from "react";
import {food_list} from "../assets/assets"
export const storeContext=createContext(null)

const StoreContextProvider =(props)=>{
     const [cartItems,setCartItems]=useState({})
     
    const addToCart=(itemId)=>{
        console.log(cartItems)
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev ,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const  removeCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalAmount =()=>{
        let totalAmount=0;
        for(const  item in cartItems)
            {
                if(cartItems[item]>0){
                    let itemInfo = food_list.find((product)=>product._id===item)
                    totalAmount +=itemInfo.price*cartItems[item]
                }
               
            }
            return totalAmount;
      }

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeCart,
        getTotalAmount


    }
//     useEffect(()=>{
//    console.log(cartItems)
//     },[cartItems])
      
    return(
        <storeContext.Provider value={contextValue}>
               {props.children}
        </storeContext.Provider>
    )
}
export default StoreContextProvider;
