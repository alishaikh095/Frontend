const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3012;

app.use(express.json());

const fs = require("fs");
const path = require("path");
const mealsFilePath = path.join(__dirname, "meals.json");

function readMeals() {
  try {
    return JSON.parse(fs.readFileSync(mealsFilePath, "utf8"));
  } catch (error) {
    return [];
  }
}

function writeMeals(meals) {
  fs.writeFileSync(mealsFilePath, JSON.stringify(meals, null, 2));
}

app.post("/api/meals", (req, res) => {
  const newMeal = req.body;
  const meals = readMeals();
  meals.push({ ...newMeal, id: Math.floor(Math.random() * Date.now()).toString(16)});
  writeMeals(meals);
  res.status(200).json(newMeal);
});

app.delete("/api/meals/:id", (req, res) => {
  const id = req.params.id;
  const meals = readMeals();
  const updatedMeals = meals.filter((meal) => meal.id !== id);
  writeMeals(updatedMeals);
  res.status(200).json({ message: "Meal deleted" });
});

app.put("/api/meals/:id", (req, res) => {
  const id = req.params.id;
  const updatedMeal = req.body;
  const meals = readMeals();
  const updatedMeals = meals.map((meal) =>
    meal.id === id ? { ...meal, ...updatedMeal } : meal
  );
  writeMeals(updatedMeals);
  res.status(200).json(updatedMeal);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.get("/api/getmeals", (req, res) => {
  const meals = readMeals();
  console.log(meals);
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(meals);
});
