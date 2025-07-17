import fs from 'fs';
import path from 'path';

const mealsFilePath = path.join(process.cwd(), 'backend', 'meals.json');

function readMeals() {
  try {
    return JSON.parse(fs.readFileSync(mealsFilePath, 'utf8'));
  } catch (error) {
    return [];
  }
}

function writeMeals(meals) {
  fs.writeFileSync(mealsFilePath, JSON.stringify(meals, null, 2));
}

export default function handler(req, res) {
  const { method, query, body } = req;

  let meals = readMeals();

  switch (method) {
    case 'GET': {
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json(meals);
    }

    case 'POST': {
      const newMeal = {
        ...body,
        id: Math.floor(Math.random() * Date.now()).toString(16),
      };
      meals.push(newMeal);
      writeMeals(meals);
      return res.status(200).json(newMeal);
    }

    case 'PUT': {
      const { id } = query;
      if (!id) return res.status(400).json({ error: 'ID is required for update' });

      const updatedMeal = body;
      const updatedMeals = meals.map((meal) =>
        meal.id === id ? { ...meal, ...updatedMeal } : meal
      );
      writeMeals(updatedMeals);
      return res.status(200).json(updatedMeal);
    }

    case 'DELETE': {
      const { id } = query;
      if (!id) return res.status(400).json({ error: 'ID is required for deletion' });

      const filteredMeals = meals.filter((meal) => meal.id !== id);
      writeMeals(filteredMeals);
      return res.status(200).json({ message: 'Meal deleted' });
    }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
