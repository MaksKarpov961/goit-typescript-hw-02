// Функція для виконання запиту до Unsplash API
import axios from "axios";
const fetchImageWithUnsplash = async (query, params) => {
  const API_KEY = "91mqVKUVeCMeRC2Vc9DbVvq20xf8RQvhmztw0o5zA8c";
  const { page = 1, perPage = 15 } = params;

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        query,
        page,
        per_page: perPage,
        orientation: "squarish",
        content_filter: "high",
      },
    });
    // Повертаємо результати
    return response.data;
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    throw error;
  }
};

export default fetchImageWithUnsplash;
