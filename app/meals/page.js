import React, { Suspense } from "react";

import styles from "./page.module.css";

import MealItem from "../../components/mealItem/mealItem";
import { getMeals } from "../../libs/httpService";
import AppProvider from "@/components/provider/provider";

async function MealsData() {
  const mealsData = await getMeals();
  console.log(mealsData)
if (
    !mealsData ||
    (typeof mealsData === "object" && !Array.isArray(mealsData) && Object.keys(mealsData).length === 0) ||
    (Array.isArray(mealsData) && mealsData.length === 0)
  ) {
    return <h4 className={styles["no-data"]}>Menu not found</h4>;
  }
  return (
    <>
      {mealsData?.map((meal) => (
        <AppProvider key={meal.id}>
          <MealItem meal={meal} alt={meal.name} />
        </AppProvider>
      ))}
    </>
  );
}

const Meals = () => {
  return (
    <>
        <section className={styles["meal-listing"]}>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <p>Loading Menu</p>
          </div>
        }
      >
        <MealsData />
      </Suspense>
    </section>
    </>

  );
};

export default Meals;
