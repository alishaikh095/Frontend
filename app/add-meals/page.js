import React from 'react';
import styles from './page.module.css';
import ImagePicker from '@/components/imagePicker/image-picker';

const AddMealsPage = () => {
    async function handleSubmit(formData) {
    'use server';
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }



  //   e.preventDefault();
  //   const meal = { name, price, description, image };
  //   try {
  //   const response = await addMeals(meal);
  //     if (response.name) {
  //       // alert('Meal added successfully!');
  // // Redirect to meals page after successful addition
  //       setName('');
  //       setPrice('');
  //       setDescription('');
  //       setImage('');
  //       router.push('/meals'); 
  //     } else {
  //       alert('Failed to add meal.');
  //     }
  //   } catch (error) {
  //     console.error('Error adding meal:', error);
  //     alert('An error occurred while adding the meal.');
  //   }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Meals</h1>
      <form action={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            // onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            // onChange={(e) => setDescription(e.target.value)}
            required
          />
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
        <button type="submit" className={styles.submitButton}>Add Meal</button>
      </form>
    </div>
  );
};

export default AddMealsPage;
