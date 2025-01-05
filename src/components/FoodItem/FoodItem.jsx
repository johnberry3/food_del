import React, { useContext, useState} from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import  StoreContext  from "../../Context/StoreContext";

const FoodItem = ({ name, _id, price, image, description }) => {
  // if (!_id) {
  //   console.error("FoodItem is missing a valid _id:", { name, _id, price, image, description });
  //   return null; // Render nothing if _id is invalid
  // }

  const{cartItems, addToCart, removeFromCart} = useContext(StoreContext);
      
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
        {!cartItems[_id] ? (
          <img
            className="add"
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
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
