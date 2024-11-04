import { useState, useEffect } from "react";
import s from "./App.module.css";
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

  // Функція, що оновлює запит при новому пошуку
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1); // Повертаємося до першої сторінки
    setGalleryItems([]); // Очищаємо поточні елементи галереї
  };

  // Функція, що оновлює сторінку при натисканні "Load more"
  const handleSearchMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Виконуємо запит при зміні query або page
  useEffect(() => {
    if (!query) return; // Якщо запит порожній, не виконуємо нічого

    const fetchData = async () => {
      setLoading(true);
      setErrorMessage("");

      try {
        const params = { page, perPage: 15 };
        const data = await fetchImageWithUnsplash(query, params);

        setLoadMore(page * 15 < data.total); // Визначаємо, чи є ще сторінки для завантаження

        setGalleryItems((prevItems) =>
          page === 1 ? data.results : [...prevItems, ...data.results]
        );
      } catch (error) {
        setErrorMessage(error.message || "Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <div className={s.gallery_wrapper}>
        {galleryItems.length > 0 && (
          <ImageGallery galleryItems={galleryItems} onImageClick={openModal} />
        )}
        {loading && <Loader />}
        {loadMore && <LoadMoreBtn handleSearchMore={handleSearchMore} />}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImageUrl}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
