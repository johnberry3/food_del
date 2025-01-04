import React, { useContext, useState} from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import  StoreContext  from "../../Context/StoreContext";

const FoodItem = ({ name, price, image, description }) => {

  const{cartItems, addToCart, removeFromCart, food_list} = useContext(StoreContext);
      
  // const [cartItems, setCartItems] = useState({});

  // const addToCart = (itemId) => {
  //   if (!cartItems[itemId]) {
  //     setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
  //   } else {
  //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   }
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  // };

  // useEffect(() => {
  //   console.log("Cart Items:", cartItems);
  // }, [cartItems]);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[food_list._id] ? (
          <img
            className="add"
            onClick={() => addToCart()}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(food_list._id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[food_list._id]}</p>
            <img
              onClick={() => addToCart()}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
