'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import {addMeals} from '../services/httpService';
import { useRouter } from 'next/navigation';

const AddMealsPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const meal = { name, price, description, image };
    try {
    const response = await addMeals(meal);
      if (response.name) {
        // alert('Meal added successfully!');
  // Redirect to meals page after successful addition
        setName('');
        setPrice('');
        setDescription('');
        setImage('');
        router.push('/meals'); 
      } else {
        alert('Failed to add meal.');
      }
    } catch (error) {
      console.error('Error adding meal:', error);
      alert('An error occurred while adding the meal.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Meals</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Add Meal</button>
      </form>
    </div>
  );
};

export default AddMealsPage;
