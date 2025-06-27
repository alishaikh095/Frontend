
'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import styles from "./mealButton.module.css";


function MealAddButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className={styles.submitButton}>
            {pending ? 'Adding...' : 'Add Meal'}
        </button>
    );
}

export default MealAddButton;