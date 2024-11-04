import Modal from "react-modal";

Modal.setAppElement("#root"); // Обов'язковий метод для доступності

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    content: {
      maxWidth: "80%", // Максимальна ширина модалки
      maxHeight: "80%", // Максимальна висота модалки
      padding: "0px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      borderRadius: "15px", // Додаємо округлі кути
    },
  };
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Enlarged" />
    </Modal>
  );
};

export default ImageModal;
