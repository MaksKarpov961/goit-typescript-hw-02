import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ galleryItems, onImageClick }) => {
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
