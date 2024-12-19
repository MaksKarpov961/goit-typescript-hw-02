import { FC } from "react";
import { UnsplashResult } from "../App/App.types";
import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  galleryItems: UnsplashResult[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({
  galleryItems,
  onImageClick,
}) => {
  return (
    <ul className={s.gallery_list}>
      {galleryItems.map(({ id, urls: { regular, small } }) => (
        <li key={id}>
          <ImageCard
            small={small}
            regular={regular}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
