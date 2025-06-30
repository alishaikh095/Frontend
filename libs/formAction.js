
import { redirect } from "next/navigation"; 
import { addMeals } from "./httpService";
 
 export async function handleSubmit(formState, formData) {

    if(!formData.get("name") || !formData.get("price") || !formData.get("description") || !formData.get("image")) {
      return { message: "All fields are required." };
    }
    try {
      const response = await addMeals(formData)
      if (response) {
        redirect("/meals");
      } else {
        
      }
    } catch (error) {
      console.error("Error adding meal:", error);
    }
  }