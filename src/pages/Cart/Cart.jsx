import React, { useContext, useState } from "react";
import "./Cart.css";
import { food_list } from "../../assets/assets";
import StoreContext from "../../Context/StoreContext";

const Cart = () => {
  //  const [cartItems, setCartItems] =useState({})
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="cart">
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
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p onClick={()=> removeFromCart(item.id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>{2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                     <p>Delivery Fee</p>
                     <p>{2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Total</p>
                  <b>{2}</b>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
               <p>if you have a promo code, Enter it here</p>
               <div className="cart-promocode-input">
                    <input type="text"  placeholder="promo code"/>
                    <button>Submit</button>
               </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
