// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addOneMore, removeOne } from '../../store/shopSlice'; // Assuming this action exists
import { Link } from 'react-router-dom';
import './Cart.css'; // Import styles for Cart component
import Header from '../header/header';

const Cart = () => {
  const cartItems = useSelector(state => state.shop.allItems); // Get all items in the cart from the Redux store
  const dispatch = useDispatch();

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch the removeFromCart action to update the store
  };

  // Function to calculate the total cost of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2); // Adds all item prices
  };

  const handleAddMoreButton = (item) => {
    dispatch(addOneMore(item))
  }

  const handleRemoveOneButton = (item) => {
    dispatch(removeOne(item))
  }

  return (
    <div className="cartContainer">
      <Header />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p> 
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cartItem">
                <img src={item.image} alt={item.title} className="cartItemImage" />
                <div className="cartItemDetails">
                  <h3>{item.title}</h3>
                  <div>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleAddMoreButton(item)}>+</button>
                  <button onClick={() => handleRemoveOneButton(item)}>-</button>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cartTotal">
            <h3>Total: ${calculateTotal()}</h3>
          </div>          
        </div>
      )}
      <Link to='/'>Go Home</Link>
    </div>
  );
};

export default Cart;
