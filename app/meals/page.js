'use client';

import React from "react";

import styles from "./page.module.css";

import MealItem from "../../components/mealItem/mealItem";
import {getMeals} from '../services/httpService';

const Meals = () => {
  const [meals, setMeals] = React.useState([]);

  React.useEffect(() => {
    const fetchMeals = async () => {
      try {
        const mealsData = await getMeals();
        setMeals(mealsData);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <section className={styles["meal-listing"]}>
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} alt={meal.name} />
      ))}
    </section>
  );
};

export default Meals;
