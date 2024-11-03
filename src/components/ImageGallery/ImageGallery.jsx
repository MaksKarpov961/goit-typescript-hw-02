import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ galleryItems, onImageClick }) => {
  return (
    <ul>
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
