'use client';

import React from 'react';
import classes from './cartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = () => {
      const cart = useSelector(state => state.cart);
    return (

           <button className={classes["cart-button"]}>
                <i className="fas fa-shopping-cart icon"></i>
                CART
                <span className={classes["cart-badge"]}>{cart.totalQuantity}</span>
              </button>

    );
};

export default CartButton;