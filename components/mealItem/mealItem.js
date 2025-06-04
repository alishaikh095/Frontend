'use client';
import React from "react";

import classes from './meal-item.module.css'

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/createSlice'; // Adjust the import path as necessary

const MealItem = ({ meal, alt }) => {
   const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log('Adding to cart:', meal);
    dispatch(addToCart({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      image: meal.image,
    }));
  };

  return (
    <div className={classes['meal-card']}>
      <img src={meal.image} alt="Calzone Chunks" loading="lazy"/>
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
      <span className={classes.price}>Rs. {meal.price}</span>
      <button onClick={handleAddToCart}>+ ADD TO CART</button>
    </div>
  );
};

export default MealItem;
