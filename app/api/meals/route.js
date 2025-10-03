import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const mealsFilePath = path.join(process.cwd(), "data", "meals.json");


function readMeals() {
  try {
    return JSON.parse(fs.readFileSync(mealsFilePath, "utf8"));
  } catch (error) {
    return [];
  }
}

function writeMeals(meals) {
  fs.mkdirSync(path.dirname(mealsFilePath), { recursive: true });
  fs.writeFileSync(mealsFilePath, JSON.stringify(meals, null, 2));
}

export async function GET() {
  const meals = readMeals();
  console.log("meals", mealsFilePath);
  return NextResponse.json(meals, { status: 200, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request) {
  const newMeal = await request.json();
  const meals = readMeals();
  const mealWithId = { ...newMeal, id: Math.floor(Math.random() * Date.now()).toString(16) };
  meals.push(mealWithId);
  writeMeals(meals);
  return NextResponse.json(mealWithId, { status: 201 });
}

export async function PUT(request) {
  const updatedMeal = await request.json();
  const meals = readMeals();
  const updatedMeals = meals.map((meal) =>
    meal.id === updatedMeal.id ? { ...meal, ...updatedMeal } : meal
  );
  writeMeals(updatedMeals);
  return NextResponse.json(updatedMeal, { status: 200 });
}

export async function DELETE(request) {
  const { id } = await request.json();
  const meals = readMeals();
  const updatedMeals = meals.filter((meal) => meal.id !== id);
  writeMeals(updatedMeals);
  return NextResponse.json({ message: "Meal deleted" }, { status: 200 });
}