import s from "./ImageCard.module.css";
const ImageCard = ({ small, regular, onImageClick }) => {
  return (
    <div className={s.img_wrapper}>
      <img
        className={s.img}
        onClick={() => onImageClick(regular)}
        src={small}
        alt="Image description"
      />
    </div>
  );
};

export default ImageCard;
