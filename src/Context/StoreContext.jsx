import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext(null);

export const StoreContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      console.log("Adding to cart:", itemId, cartItems);
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
  
      // Skip undefined or invalid itemId
      if (!itemId || !quantity || quantity <= 0) continue;
  
      const itemInfo = food_list.find((product) => String(product._id) === String(itemId));
      if (itemInfo) {
        totalAmount += itemInfo.price * quantity;
      } else {
        console.warn(`Item with ID ${itemId} not found in food_list.`);
      }
    }
  
    return totalAmount;
  };
  
    useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);
  

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
