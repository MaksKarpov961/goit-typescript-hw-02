import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "./ImageGallery/ImageGallery";

function App() {
  const [galleryItems, setGalleryItems] = useState([]);
  const API_KEY = "91mqVKUVeCMeRC2Vc9DbVvq20xf8RQvhmztw0o5zA8c";

  // Функція для виконання запиту до Unsplash API
  const fetchImageWithUnsplash = async (query, params) => {
    const { page = 1, perPage = 10 } = params;

    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
          params: {
            query,
            page,
            per_page: perPage,
          },
        }
      );
      // Повертаємо результати
      return response.data.results;
    } catch (error) {
      console.error("Error fetching images from Unsplash:", error);
      throw error;
    }
  };

  // Функція для обробки пошуку
  const handleSearch = async (query) => {
    try {
      setGalleryItems([]); // Очищення попередніх результатів
      const params = { page: 1, perPage: 10 }; // Параметри для запиту
      const data = await fetchImageWithUnsplash(query, params);
      setGalleryItems(data); // Встановлення нових даних у стан
    } catch (error) {
      console.log("Failed to fetch images:", error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery galleryItems={galleryItems} />
    </>
  );
}

export default App;
