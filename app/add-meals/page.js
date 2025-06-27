import React from "react";
import styles from "./page.module.css";
import ImagePicker from "@/components/imagePicker/image-picker";
import { addMeals } from "../../libs/httpService";
import { redirect } from "next/navigation";
import MealAddButton from "@/components/mealAddButton/mealAddButton";

const AddMealsPage = () => {
  async function handleSubmit(formData) {
    "use server";
    try {
      const response = await addMeals(formData);
      if (response) {
        redirect("/meals");
      } else {
        // alert('Failed to add meal.');
      }
    } catch (error) {
      console.error("Error adding meal:", error);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Meals</h1>
      <form action={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required />
        </div>
        {/* <div className={styles.formGroup}>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

        </div> */}
        <div className={styles.formGroup}>
          <ImagePicker name="image" />
        </div>
          <MealAddButton />
      </form>
    </div>
  );
};

export default AddMealsPage;
