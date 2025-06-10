
import React from "react";

import styles from "./page.module.css";

import MealItem from "../../components/mealItem/mealItem";
import {getMeals} from '../services/httpService';
import AppProvider from "@/components/provider/provider";

const Meals = async () => {

   const mealsData = await getMeals();

  return (
    <section className={styles["meal-listing"]}>
      {mealsData.map((meal) => (
        <AppProvider key={meal.id}>
                  <MealItem meal={meal} alt={meal.name} />
        </AppProvider>

      ))}
    </section>
  );
};

export default Meals;
