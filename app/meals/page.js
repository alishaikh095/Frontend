
import React, { Suspense } from "react";

import styles from "./page.module.css";

import MealItem from "../../components/mealItem/mealItem";
import {getMeals} from '../services/httpService';
import AppProvider from "@/components/provider/provider";

 async function MealsData() {
       const mealsData = await getMeals();
   return <>{mealsData.map((meal) => (
        <AppProvider key={meal.id}>
                  <MealItem meal={meal} alt={meal.name} />
        </AppProvider>

      ))}</>
}

const Meals = () => {


  return (
    <section className={styles["meal-listing"]}>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <p>Loading Menu</p>
        </div>}>
      <MealsData />
      </Suspense>

    </section>
  );
};

export default Meals;
