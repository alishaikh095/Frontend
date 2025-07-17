const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getMeals = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/meals`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching meals:", error);
    return null;
  }
};

export const addMeals = async (formData) => {
  try {
    const meal = {
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
      image: formData.get("image"),
    };
       
    meal.image = await UploadImage(meal.image);

        const response = await fetch(`${baseUrl}/api/meals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(meal),
    });

    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error posting meal:", error);
    return null;
  }
};
