import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImageWithUnsplash from "../fetchImageWithUnsplash";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [page, setPage] = useState(1); // Додаємо стан для сторінки
  const [query, setQuery] = useState(""); // Зберігаємо поточний запит

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadMore, setLoadMore] = useState(false);

  // Функція для обробки пошуку
  const handleSearch = async (newQuery) => {
    try {
      setQuery(newQuery);
      setPage(1);
      setGalleryItems([]);
      setLoading(true);
      setErrorMessage("");

      const params = { page: 1, perPage: 15 };
      const data = await fetchImageWithUnsplash(newQuery, params);
      if (page * 15 >= data.total) {
        setLoadMore(false);
      } else {
        setLoadMore(true);
      }
      setGalleryItems(data.results);
    } catch (error) {
      setErrorMessage(error.message || "Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchMore = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      setLoading(true);
      setErrorMessage("");

      const params = { page: nextPage, perPage: 15 };
      const data = await fetchImageWithUnsplash(query, params);
      if (page * 15 >= data.total) {
        setLoadMore(false);
      } else {
        setLoadMore(true);
      }

      setGalleryItems((prevItems) => [...prevItems, ...data.results]);
    } catch (error) {
      setErrorMessage(error.message || "Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {galleryItems.length > 0 && <ImageGallery galleryItems={galleryItems} />}
      {loading && <Loader />}
      {loadMore && <LoadMoreBtn handleSearchMore={handleSearchMore} />}
    </>
  );
}

export default App;
