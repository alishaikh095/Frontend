import React from "react";

import classes from './meal-item.module.css'
import Image from 'next/image';

const MealItem = ({ meal, alt }) => {
  return (
    <div className={classes['meal-card']}>
      <img src={meal.image} alt="Calzone Chunks" loading="lazy"/>
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
      <span className={classes.price}>Rs. {meal.price}</span>
      <button>+ ADD TO CART</button>
    </div>
  );
};

export default MealItem;
