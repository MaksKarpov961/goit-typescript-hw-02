const ImageCard = ({ small, regular, onImageClick }) => {
  return (
    <div>
      <img
        onClick={() => onImageClick(regular)}
        src={small}
        alt="Image description"
      />
    </div>
  );
};

export default ImageCard;
