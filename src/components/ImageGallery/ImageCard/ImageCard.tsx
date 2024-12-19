import s from "./ImageCard.module.css";
import { FC } from "react";
interface ImageCardProps {
  small: string;
  regular: string;
  onImageClick: (url: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ small, regular, onImageClick }) => {
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
