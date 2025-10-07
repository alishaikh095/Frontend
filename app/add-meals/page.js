"use client";
import React from "react";
import styles from "./page.module.css";
import ImagePicker from "@/components/imagePicker/image-picker";
import MealAddButton from "@/components/mealAddButton/mealAddButton";
import { handleSubmit } from "@/libs/formAction";
import { useFormState } from "react-dom";

const AddMealsPage = () => {


  const [state, formAction] = useFormState(handleSubmit, {message: null});
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Meals</h1>
      <form action={formAction} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price"  />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"  />
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
          <ImagePicker name="image" label="Pick an Image" />
        </div>
        {state.message && (
          <p className={styles.errorForm}>
            {state.message}
          </p>
        )}
          <MealAddButton />
      </form>
    </div>
  );
};

export default AddMealsPage;
