import React,{useContext} from 'react'
import "./FootItem.css"
import { assets } from '../assets/assets'
import { storeContext } from '../Context/StoreContext'
function FoodItem({id,name,price,description,image}) {
 

  const{ cartItems,addToCart,removeCart}=useContext(storeContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className='food-item-image' />
            {!cartItems[id] 
            ? <img  className="add"onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add_icon" />:
            <div className="food-item-counter">
              <img onClick={()=>removeCart(id)}  src={assets.remove_icon_red} alt="removeIcon" />
              <p>{cartItems[id]}</p>
              <img  onClick={()=>addToCart(id)}  src={assets.add_icon_green} alt="addIcon"  />
            </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
              <p>{name}</p>
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className="food-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
