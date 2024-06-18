import React, { useContext } from 'react';
import './FoodDisplay.css';
import { storeContext } from '../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({ category }) {
  const { food_list } = useContext(storeContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          // Check if the category matches or if category is "All"
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          } else {
            return null; // Ensure to return null for the else case
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
