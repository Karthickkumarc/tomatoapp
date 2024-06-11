import React, { useContext } from 'react'
import "./Cart.css"
import { storeContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const{  food_list,cartItems,removeCart,getTotalAmount}=useContext(storeContext)
    const navigate=useNavigate();
    return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
      </div>
        <br />
        <hr />
        
        {food_list.map((item,index)=>{
            if(cartItems[item._id ]>0){
          return(
            <div className=' cart-items-title cart-items-item'>
                  <img src={item.image} alt="image" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeCart(item._id)}>x</p>
                </div>
          )
        }
        })}
        
      </div>
      <div className="cart-bottom">
      <div className="cart-total">
            <h2>cart Total</h2>
            <div>
                <div className="cart-total-details">
                    <p>subtotal</p>
                    <p>{getTotalAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>{getTotalAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>platForm Fee</p>
                    <p>{getTotalAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>total</p>
                    <b>{getTotalAmount()===0?0:getTotalAmount()+2+2}</b>
                </div>
            </div>
            <button onClick={()=>navigate("/order")}>proceed to checkout</button>
        </div>
        <div className="cart-promocode">
            <div>
                <p>if you hava a promocode, Enter it here</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder='promocode'  />
                    <button>submit</button>
                </div>
            </div>
        </div>
      </div>

      
    </div>
  )
}

export default Cart
