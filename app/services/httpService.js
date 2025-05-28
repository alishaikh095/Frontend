
const BASE_URL = 'http://localhost:3012';

export const getMeals = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/getmeals`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching meals:', error);
        return null;
    }
};

export const addMeals = async (mealData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/meals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(mealData)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error posting meal:', error);
        return null;
    }
};