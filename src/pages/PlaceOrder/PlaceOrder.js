import React, { useContext } from 'react'
import { storeContext } from '../../components/Context/StoreContext'
import "./PlaceOrder.css"
function PlaceOrder() {
    const {getTotalAmount}=useContext(storeContext)
  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className="title">
                Delivery information
            </p>
            <div className="multi-fields">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='street'   />
            <div className="multi-fields">
                <input type="text" placeholder='city' />
                <input type="text" placeholder='state' />
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='zipcode' />
                <input type="text" placeholder='country' />
            </div>
            <input type="text" placeholder='Phone number' />

        </div>
          <div className="place-order-right">
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
            <button >proceed to payment</button>
        </div>
          </div>
    </form>
  )
}

export default PlaceOrder
