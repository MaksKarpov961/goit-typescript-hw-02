import Modal from "react-modal";

Modal.setAppElement("#root"); // Обов'язковий метод для доступності

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
}) => {
  const customStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    },
    content: {
      maxWidth: "80%",
      maxHeight: "80%",
      padding: "0px",
      border: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
      borderRadius: "20px",
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
