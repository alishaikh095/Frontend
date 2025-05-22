import React from 'react';
const MealsDataComponent = ({ meal }) => {
    if (!meal) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{meal.name}</h1>
            <p>{meal.description}</p>
            <p>Price: ${meal.price.toFixed(2)}</p>
        </div>
    );
};

export default MealsDataComponent;