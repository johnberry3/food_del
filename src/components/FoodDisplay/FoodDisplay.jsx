import React, { useContext } from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";
import StoreContext from "../../Context/StoreContext";

const FoodDisplay = ({ category }) => {


  // console.log(food_list)

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
           {console.log(category, item.category)}
           if(category === "All" || category === item.category){
            return <FoodItem
                key={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                />
            
           }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
