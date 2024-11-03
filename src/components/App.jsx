import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImageWithUnsplash from "../fetchImageWithUnsplash";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal"; // Імпортуємо модальне вікно

function App() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadMore, setLoadMore] = useState(false);

  // Додаємо стани для модального вікна
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  // Функція для відкриття модального вікна
  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  // Функція для закриття модального вікна
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  const handleSearch = async (newQuery) => {
    try {
      setQuery(newQuery);
      setPage(1);
      setGalleryItems([]);
      setLoading(true);
      setErrorMessage("");
      const params = { page: 1, perPage: 15 };
      const data = await fetchImageWithUnsplash(newQuery, params);
      setLoadMore(page * 15 < data.total);
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
      setLoadMore(page * 15 < data.total);
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
      {galleryItems.length > 0 && (
        <ImageGallery galleryItems={galleryItems} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {loadMore && <LoadMoreBtn handleSearchMore={handleSearchMore} />}
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImageUrl}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
